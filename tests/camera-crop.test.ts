import {test} from 'node:test';
import assert from 'node:assert/strict';
import {portraitCameraCrop} from '../src/features/split/camera-crop';
test('portrait capture uses the same centered cover crop for landscape and portrait cameras',()=>{
  for(const [width,height] of [[1920,1080],[1080,1920],[305,476]]){
    const crop=portraitCameraCrop(width,height);
    assert.ok(Math.abs(crop.width/crop.height-305/476)<1e-10);
    assert.ok(crop.width<=width&&crop.height<=height+1e-10);
    assert.ok(Math.abs(crop.x*2+crop.width-width)<1e-10);
    assert.ok(Math.abs(crop.y*2+crop.height-height)<1e-10);
  }
  assert.throws(()=>portraitCameraCrop(0,1080));
});
