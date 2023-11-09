# ChangeSourceGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**SourceGroup** | Pointer to [**SourceGroupType**](SourceGroupType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeSourceGroupRequest

`func NewChangeSourceGroupRequest() *ChangeSourceGroupRequest`

NewChangeSourceGroupRequest instantiates a new ChangeSourceGroupRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeSourceGroupRequestWithDefaults

`func NewChangeSourceGroupRequestWithDefaults() *ChangeSourceGroupRequest`

NewChangeSourceGroupRequestWithDefaults instantiates a new ChangeSourceGroupRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeSourceGroupRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeSourceGroupRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeSourceGroupRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeSourceGroupRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSourceGroup

`func (o *ChangeSourceGroupRequest) GetSourceGroup() SourceGroupType`

GetSourceGroup returns the SourceGroup field if non-nil, zero value otherwise.

### GetSourceGroupOk

`func (o *ChangeSourceGroupRequest) GetSourceGroupOk() (*SourceGroupType, bool)`

GetSourceGroupOk returns a tuple with the SourceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceGroup

`func (o *ChangeSourceGroupRequest) SetSourceGroup(v SourceGroupType)`

SetSourceGroup sets SourceGroup field to given value.

### HasSourceGroup

`func (o *ChangeSourceGroupRequest) HasSourceGroup() bool`

HasSourceGroup returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeSourceGroupRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeSourceGroupRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeSourceGroupRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeSourceGroupRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


