# PutCancellationCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationCodes** | Pointer to [**[]CancellationCodeType**](CancellationCodeType.md) | List of Cancellation Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutCancellationCodesRequest

`func NewPutCancellationCodesRequest() *PutCancellationCodesRequest`

NewPutCancellationCodesRequest instantiates a new PutCancellationCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCancellationCodesRequestWithDefaults

`func NewPutCancellationCodesRequestWithDefaults() *PutCancellationCodesRequest`

NewPutCancellationCodesRequestWithDefaults instantiates a new PutCancellationCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationCodes

`func (o *PutCancellationCodesRequest) GetCancellationCodes() []CancellationCodeType`

GetCancellationCodes returns the CancellationCodes field if non-nil, zero value otherwise.

### GetCancellationCodesOk

`func (o *PutCancellationCodesRequest) GetCancellationCodesOk() (*[]CancellationCodeType, bool)`

GetCancellationCodesOk returns a tuple with the CancellationCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationCodes

`func (o *PutCancellationCodesRequest) SetCancellationCodes(v []CancellationCodeType)`

SetCancellationCodes sets CancellationCodes field to given value.

### HasCancellationCodes

`func (o *PutCancellationCodesRequest) HasCancellationCodes() bool`

HasCancellationCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PutCancellationCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCancellationCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCancellationCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCancellationCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCancellationCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCancellationCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCancellationCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCancellationCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


