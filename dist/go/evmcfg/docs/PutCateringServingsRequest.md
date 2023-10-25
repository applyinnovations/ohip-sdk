# PutCateringServingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Servings** | Pointer to [**[]CateringCodeType**](CateringCodeType.md) | Catering Code details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutCateringServingsRequest

`func NewPutCateringServingsRequest() *PutCateringServingsRequest`

NewPutCateringServingsRequest instantiates a new PutCateringServingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCateringServingsRequestWithDefaults

`func NewPutCateringServingsRequestWithDefaults() *PutCateringServingsRequest`

NewPutCateringServingsRequestWithDefaults instantiates a new PutCateringServingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutCateringServingsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCateringServingsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCateringServingsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCateringServingsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetServings

`func (o *PutCateringServingsRequest) GetServings() []CateringCodeType`

GetServings returns the Servings field if non-nil, zero value otherwise.

### GetServingsOk

`func (o *PutCateringServingsRequest) GetServingsOk() (*[]CateringCodeType, bool)`

GetServingsOk returns a tuple with the Servings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServings

`func (o *PutCateringServingsRequest) SetServings(v []CateringCodeType)`

SetServings sets Servings field to given value.

### HasServings

`func (o *PutCateringServingsRequest) HasServings() bool`

HasServings returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCateringServingsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCateringServingsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCateringServingsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCateringServingsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


