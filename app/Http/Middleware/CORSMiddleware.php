<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CORSMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        //Intercepts OPTIONS requests
        if($request->isMethod('OPTIONS')){
            $response = \response('', 200);
        }else{
            //Pass the request to the next middleware
            $response = $next($request);
        }
        $response->header('Cache-Control',"no-cache, must-revalidate");
        $response->header('Access-Control-Allow-Origin',"*");
        $response->header('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTIONS, PATCH');
        $response->header('Access-Control-Allow-Headers','Content-Type, X-Auth-Token, Origin, Authorization');
        $response->header('Access-Control-Allow-Credentials','true');
        $response->header('Accept','application/json');


        return $response;
    }
}
