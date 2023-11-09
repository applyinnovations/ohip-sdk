# PutCommissionCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionCodes** | Pointer to [**CommissionCodesType**](CommissionCodesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutCommissionCodesRequest

`func NewPutCommissionCodesRequest() *PutCommissionCodesRequest`

NewPutCommissionCodesRequest instantiates a new PutCommissionCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCommissionCodesRequestWithDefaults

`func NewPutCommissionCodesRequestWithDefaults() *PutCommissionCodesRequest`

NewPutCommissionCodesRequestWithDefaults instantiates a new PutCommissionCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionCodes

`func (o *PutCommissionCodesRequest) GetCommissionCodes() CommissionCodesType`

GetCommissionCodes returns the CommissionCodes field if non-nil, zero value otherwise.

### GetCommissionCodesOk

`func (o *PutCommissionCodesRequest) GetCommissionCodesOk() (*CommissionCodesType, bool)`

GetCommissionCodesOk returns a tuple with the CommissionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCodes

`func (o *PutCommissionCodesRequest) SetCommissionCodes(v CommissionCodesType)`

SetCommissionCodes sets CommissionCodes field to given value.

### HasCommissionCodes

`func (o *PutCommissionCodesRequest) HasCommissionCodes() bool`

HasCommissionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PutCommissionCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCommissionCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCommissionCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCommissionCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCommissionCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCommissionCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCommissionCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCommissionCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


