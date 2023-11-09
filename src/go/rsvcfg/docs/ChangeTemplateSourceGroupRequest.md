# ChangeTemplateSourceGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TemplateSourceGroup** | Pointer to [**TemplateSourceGroupType**](TemplateSourceGroupType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeTemplateSourceGroupRequest

`func NewChangeTemplateSourceGroupRequest() *ChangeTemplateSourceGroupRequest`

NewChangeTemplateSourceGroupRequest instantiates a new ChangeTemplateSourceGroupRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateSourceGroupRequestWithDefaults

`func NewChangeTemplateSourceGroupRequestWithDefaults() *ChangeTemplateSourceGroupRequest`

NewChangeTemplateSourceGroupRequestWithDefaults instantiates a new ChangeTemplateSourceGroupRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateSourceGroupRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateSourceGroupRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateSourceGroupRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateSourceGroupRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateSourceGroup

`func (o *ChangeTemplateSourceGroupRequest) GetTemplateSourceGroup() TemplateSourceGroupType`

GetTemplateSourceGroup returns the TemplateSourceGroup field if non-nil, zero value otherwise.

### GetTemplateSourceGroupOk

`func (o *ChangeTemplateSourceGroupRequest) GetTemplateSourceGroupOk() (*TemplateSourceGroupType, bool)`

GetTemplateSourceGroupOk returns a tuple with the TemplateSourceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateSourceGroup

`func (o *ChangeTemplateSourceGroupRequest) SetTemplateSourceGroup(v TemplateSourceGroupType)`

SetTemplateSourceGroup sets TemplateSourceGroup field to given value.

### HasTemplateSourceGroup

`func (o *ChangeTemplateSourceGroupRequest) HasTemplateSourceGroup() bool`

HasTemplateSourceGroup returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateSourceGroupRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateSourceGroupRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateSourceGroupRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateSourceGroupRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


