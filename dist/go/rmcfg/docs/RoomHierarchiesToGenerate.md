# RoomHierarchiesToGenerate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**RoomHierarchySearchType**](RoomHierarchySearchType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomHierarchiesToGenerate

`func NewRoomHierarchiesToGenerate() *RoomHierarchiesToGenerate`

NewRoomHierarchiesToGenerate instantiates a new RoomHierarchiesToGenerate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomHierarchiesToGenerateWithDefaults

`func NewRoomHierarchiesToGenerateWithDefaults() *RoomHierarchiesToGenerate`

NewRoomHierarchiesToGenerateWithDefaults instantiates a new RoomHierarchiesToGenerate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *RoomHierarchiesToGenerate) GetCriteria() RoomHierarchySearchType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *RoomHierarchiesToGenerate) GetCriteriaOk() (*RoomHierarchySearchType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *RoomHierarchiesToGenerate) SetCriteria(v RoomHierarchySearchType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *RoomHierarchiesToGenerate) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *RoomHierarchiesToGenerate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomHierarchiesToGenerate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomHierarchiesToGenerate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomHierarchiesToGenerate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomHierarchiesToGenerate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomHierarchiesToGenerate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomHierarchiesToGenerate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomHierarchiesToGenerate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


