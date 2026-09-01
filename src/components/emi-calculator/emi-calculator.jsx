import { useState } from "react"

export function EmiCalculator() {
    const [amount,setAmount]=useState(0);
    const [rate,setRate]=useState(0);
    const [year,setYear]=useState(0);

    const [installment,setInstallment]=useState(0);

    function handleAmountChange(e){
        setAmount(e.target.value);
    }
    function handleYearChange(e){
        setYear(e.target.value);
    }
    function handleRateChange(e){
        setRate(e.target.value);
    }

    function handleCalculateClick(){
        let P=amount;
        let R=rate/12/100;
        let N=year*12;
        let EMI=P*R*(Math.pow(1+R,N))/(Math.pow(1+R,N))-1;
        setInstallment(EMI);
    }
    return (
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-6">
                    <div className="p-5 rounded-4 border border-1">
                        <div>
                            <div className="d-flex justify-content-between">
                                <label className="form-label fw-bold fs-4">Loan Amount</label>
                                <input className="form-control w-25" onChange={handleAmountChange} type="text" value={amount}/>
                            </div>
                            <div className="my-4">
                                <input type="range" onChange={handleAmountChange} min={100000} max={10000000} step={10000} value={amount} className="form-range" />
                                <div className="fs-5 d-flex justify-content-between">
                                    <span>&#8377; 1,00,000</span>
                                    <span>&#8377; 10,00,000</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="d-flex justify-content-between">
                                <label className="form-label fw-bold fs-4">Loan Tenure</label>
                                <input className="form-control w-25" onChange={handleYearChange} type="text" value={year}/>
                            </div>
                            <div className="my-4">
                                <input type="range" onChange={handleYearChange} min={1} max={7} value={year} className="form-range" />
                                <div className="fs-5 d-flex justify-content-between">
                                    <span>1 Year</span>
                                    <span>7 Years</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="d-flex justify-content-between">
                                <label className="form-label fw-bold fs-4">Interest Rate</label>
                                <input className="form-control w-25" onChange={handleRateChange} type="text" value={rate}/>
                            </div>
                            <div className="my-4">
                                <input type="range" onChange={handleRateChange} min={9.34} max={16.5} step={0.01} value={rate} className="form-range" />
                                <div className="fs-5 d-flex justify-content-between">
                                    <span>9.34%</span>
                                    <span>16.50%</span>
                                </div>
                            </div>
                            <div className="mt-3 text-center">
                                <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-5">
                        <div className="bg-primary text-white p-5 rounded rounded-4">
                            <div className="fs-5">Monthly Installment Amount</div>
                            <div className="fs-1 fw-bold">
                                    {
                                        installment.toLocaleString('en-in',{style:"currency",currency:'INR'})
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}