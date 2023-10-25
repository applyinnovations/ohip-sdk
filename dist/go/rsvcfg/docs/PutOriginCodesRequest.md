# PutOriginCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**OriginCodes** | Pointer to [**[]OriginCodeType**](OriginCodeType.md) | List of Origin Codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutOriginCodesRequest

`func NewPutOriginCodesRequest() *PutOriginCodesRequest`

NewPutOriginCodesRequest instantiates a new PutOriginCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutOriginCodesRequestWithDefaults

`func NewPutOriginCodesRequestWithDefaults() *PutOriginCodesRequest`

NewPutOriginCodesRequestWithDefaults instantiates a new PutOriginCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutOriginCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutOriginCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutOriginCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutOriginCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOriginCodes

`func (o *PutOriginCodesRequest) GetOriginCodes() []OriginCodeType`

GetOriginCodes returns the OriginCodes field if non-nil, zero value otherwise.

### GetOriginCodesOk

`func (o *PutOriginCodesRequest) GetOriginCodesOk() (*[]OriginCodeType, bool)`

GetOriginCodesOk returns a tuple with the OriginCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginCodes

`func (o *PutOriginCodesRequest) SetOriginCodes(v []OriginCodeType)`

SetOriginCodes sets OriginCodes field to given value.

### HasOriginCodes

`func (o *PutOriginCodesRequest) HasOriginCodes() bool`

HasOriginCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PutOriginCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutOriginCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutOriginCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutOriginCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


