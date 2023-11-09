# PutRotationPeriodRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RotationPeriod** | Pointer to [**RotationPeriodType**](RotationPeriodType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutRotationPeriodRequest

`func NewPutRotationPeriodRequest() *PutRotationPeriodRequest`

NewPutRotationPeriodRequest instantiates a new PutRotationPeriodRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRotationPeriodRequestWithDefaults

`func NewPutRotationPeriodRequestWithDefaults() *PutRotationPeriodRequest`

NewPutRotationPeriodRequestWithDefaults instantiates a new PutRotationPeriodRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRotationPeriod

`func (o *PutRotationPeriodRequest) GetRotationPeriod() RotationPeriodType`

GetRotationPeriod returns the RotationPeriod field if non-nil, zero value otherwise.

### GetRotationPeriodOk

`func (o *PutRotationPeriodRequest) GetRotationPeriodOk() (*RotationPeriodType, bool)`

GetRotationPeriodOk returns a tuple with the RotationPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotationPeriod

`func (o *PutRotationPeriodRequest) SetRotationPeriod(v RotationPeriodType)`

SetRotationPeriod sets RotationPeriod field to given value.

### HasRotationPeriod

`func (o *PutRotationPeriodRequest) HasRotationPeriod() bool`

HasRotationPeriod returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRotationPeriodRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRotationPeriodRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRotationPeriodRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRotationPeriodRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


