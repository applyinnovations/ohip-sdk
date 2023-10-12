# PutRevenueTransactionCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueTransactionCodes** | Pointer to [**RotationRevenueTransactionCodesChangeType**](RotationRevenueTransactionCodesChangeType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutRevenueTransactionCodesRequest

`func NewPutRevenueTransactionCodesRequest() *PutRevenueTransactionCodesRequest`

NewPutRevenueTransactionCodesRequest instantiates a new PutRevenueTransactionCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRevenueTransactionCodesRequestWithDefaults

`func NewPutRevenueTransactionCodesRequestWithDefaults() *PutRevenueTransactionCodesRequest`

NewPutRevenueTransactionCodesRequestWithDefaults instantiates a new PutRevenueTransactionCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueTransactionCodes

`func (o *PutRevenueTransactionCodesRequest) GetRevenueTransactionCodes() RotationRevenueTransactionCodesChangeType`

GetRevenueTransactionCodes returns the RevenueTransactionCodes field if non-nil, zero value otherwise.

### GetRevenueTransactionCodesOk

`func (o *PutRevenueTransactionCodesRequest) GetRevenueTransactionCodesOk() (*RotationRevenueTransactionCodesChangeType, bool)`

GetRevenueTransactionCodesOk returns a tuple with the RevenueTransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueTransactionCodes

`func (o *PutRevenueTransactionCodesRequest) SetRevenueTransactionCodes(v RotationRevenueTransactionCodesChangeType)`

SetRevenueTransactionCodes sets RevenueTransactionCodes field to given value.

### HasRevenueTransactionCodes

`func (o *PutRevenueTransactionCodesRequest) HasRevenueTransactionCodes() bool`

HasRevenueTransactionCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRevenueTransactionCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRevenueTransactionCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRevenueTransactionCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRevenueTransactionCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


