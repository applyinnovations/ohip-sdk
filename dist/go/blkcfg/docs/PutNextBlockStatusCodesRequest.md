# PutNextBlockStatusCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**NextBlockStatusCodeList** | Pointer to [**[]NextBlockStatusCodeType**](NextBlockStatusCodeType.md) | Block status code with its next configured and/or available status codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutNextBlockStatusCodesRequest

`func NewPutNextBlockStatusCodesRequest() *PutNextBlockStatusCodesRequest`

NewPutNextBlockStatusCodesRequest instantiates a new PutNextBlockStatusCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutNextBlockStatusCodesRequestWithDefaults

`func NewPutNextBlockStatusCodesRequestWithDefaults() *PutNextBlockStatusCodesRequest`

NewPutNextBlockStatusCodesRequestWithDefaults instantiates a new PutNextBlockStatusCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutNextBlockStatusCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutNextBlockStatusCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutNextBlockStatusCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutNextBlockStatusCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNextBlockStatusCodeList

`func (o *PutNextBlockStatusCodesRequest) GetNextBlockStatusCodeList() []NextBlockStatusCodeType`

GetNextBlockStatusCodeList returns the NextBlockStatusCodeList field if non-nil, zero value otherwise.

### GetNextBlockStatusCodeListOk

`func (o *PutNextBlockStatusCodesRequest) GetNextBlockStatusCodeListOk() (*[]NextBlockStatusCodeType, bool)`

GetNextBlockStatusCodeListOk returns a tuple with the NextBlockStatusCodeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextBlockStatusCodeList

`func (o *PutNextBlockStatusCodesRequest) SetNextBlockStatusCodeList(v []NextBlockStatusCodeType)`

SetNextBlockStatusCodeList sets NextBlockStatusCodeList field to given value.

### HasNextBlockStatusCodeList

`func (o *PutNextBlockStatusCodesRequest) HasNextBlockStatusCodeList() bool`

HasNextBlockStatusCodeList returns a boolean if a field has been set.

### GetWarnings

`func (o *PutNextBlockStatusCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutNextBlockStatusCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutNextBlockStatusCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutNextBlockStatusCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


