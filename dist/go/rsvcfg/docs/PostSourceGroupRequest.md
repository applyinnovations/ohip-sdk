# PostSourceGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SourceGroup** | Pointer to [**SourceGroupType**](SourceGroupType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostSourceGroupRequest

`func NewPostSourceGroupRequest() *PostSourceGroupRequest`

NewPostSourceGroupRequest instantiates a new PostSourceGroupRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostSourceGroupRequestWithDefaults

`func NewPostSourceGroupRequestWithDefaults() *PostSourceGroupRequest`

NewPostSourceGroupRequestWithDefaults instantiates a new PostSourceGroupRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostSourceGroupRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostSourceGroupRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostSourceGroupRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostSourceGroupRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSourceGroup

`func (o *PostSourceGroupRequest) GetSourceGroup() SourceGroupType`

GetSourceGroup returns the SourceGroup field if non-nil, zero value otherwise.

### GetSourceGroupOk

`func (o *PostSourceGroupRequest) GetSourceGroupOk() (*SourceGroupType, bool)`

GetSourceGroupOk returns a tuple with the SourceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceGroup

`func (o *PostSourceGroupRequest) SetSourceGroup(v SourceGroupType)`

SetSourceGroup sets SourceGroup field to given value.

### HasSourceGroup

`func (o *PostSourceGroupRequest) HasSourceGroup() bool`

HasSourceGroup returns a boolean if a field has been set.

### GetWarnings

`func (o *PostSourceGroupRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostSourceGroupRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostSourceGroupRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostSourceGroupRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


