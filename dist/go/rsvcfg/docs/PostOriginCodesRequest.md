# PostOriginCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**OriginCodes** | Pointer to [**[]OriginCodeType**](OriginCodeType.md) | List of Origin Codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostOriginCodesRequest

`func NewPostOriginCodesRequest() *PostOriginCodesRequest`

NewPostOriginCodesRequest instantiates a new PostOriginCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostOriginCodesRequestWithDefaults

`func NewPostOriginCodesRequestWithDefaults() *PostOriginCodesRequest`

NewPostOriginCodesRequestWithDefaults instantiates a new PostOriginCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostOriginCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostOriginCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostOriginCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostOriginCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOriginCodes

`func (o *PostOriginCodesRequest) GetOriginCodes() []OriginCodeType`

GetOriginCodes returns the OriginCodes field if non-nil, zero value otherwise.

### GetOriginCodesOk

`func (o *PostOriginCodesRequest) GetOriginCodesOk() (*[]OriginCodeType, bool)`

GetOriginCodesOk returns a tuple with the OriginCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginCodes

`func (o *PostOriginCodesRequest) SetOriginCodes(v []OriginCodeType)`

SetOriginCodes sets OriginCodes field to given value.

### HasOriginCodes

`func (o *PostOriginCodesRequest) HasOriginCodes() bool`

HasOriginCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PostOriginCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostOriginCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostOriginCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostOriginCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


