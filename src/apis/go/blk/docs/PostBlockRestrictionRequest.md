# PostBlockRestrictionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreateBlockRestriction** | Pointer to [**CreateBlockRestrictionType**](CreateBlockRestrictionType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBlockRestrictionRequest

`func NewPostBlockRestrictionRequest() *PostBlockRestrictionRequest`

NewPostBlockRestrictionRequest instantiates a new PostBlockRestrictionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBlockRestrictionRequestWithDefaults

`func NewPostBlockRestrictionRequestWithDefaults() *PostBlockRestrictionRequest`

NewPostBlockRestrictionRequestWithDefaults instantiates a new PostBlockRestrictionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreateBlockRestriction

`func (o *PostBlockRestrictionRequest) GetCreateBlockRestriction() CreateBlockRestrictionType`

GetCreateBlockRestriction returns the CreateBlockRestriction field if non-nil, zero value otherwise.

### GetCreateBlockRestrictionOk

`func (o *PostBlockRestrictionRequest) GetCreateBlockRestrictionOk() (*CreateBlockRestrictionType, bool)`

GetCreateBlockRestrictionOk returns a tuple with the CreateBlockRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateBlockRestriction

`func (o *PostBlockRestrictionRequest) SetCreateBlockRestriction(v CreateBlockRestrictionType)`

SetCreateBlockRestriction sets CreateBlockRestriction field to given value.

### HasCreateBlockRestriction

`func (o *PostBlockRestrictionRequest) HasCreateBlockRestriction() bool`

HasCreateBlockRestriction returns a boolean if a field has been set.

### GetLinks

`func (o *PostBlockRestrictionRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBlockRestrictionRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBlockRestrictionRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBlockRestrictionRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBlockRestrictionRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBlockRestrictionRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBlockRestrictionRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBlockRestrictionRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


