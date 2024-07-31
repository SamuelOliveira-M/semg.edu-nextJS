
export function ProfilePlaceholder() {
  return (
    <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center">
       <p className='text-xs'> foto</p> 
    </div>
  );
}

export function LongProfilePlaceholder({width, height}:{width:Number, height:Number}) {
  return (
    <div className="rounded-full bg-gray-200 w-36 h-36 flex items-center justify-center">
       <p className='text-xs'> foto</p> 
    </div>
  );
}