# CateringMenuClasses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MenuClassList** | Pointer to [**[]CateringMenuClassType**](CateringMenuClassType.md) | List of Values of Menu. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCateringMenuClasses

`func NewCateringMenuClasses() *CateringMenuClasses`

NewCateringMenuClasses instantiates a new CateringMenuClasses object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuClassesWithDefaults

`func NewCateringMenuClassesWithDefaults() *CateringMenuClasses`

NewCateringMenuClassesWithDefaults instantiates a new CateringMenuClasses object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMenuClassList

`func (o *CateringMenuClasses) GetMenuClassList() []CateringMenuClassType`

GetMenuClassList returns the MenuClassList field if non-nil, zero value otherwise.

### GetMenuClassListOk

`func (o *CateringMenuClasses) GetMenuClassListOk() (*[]CateringMenuClassType, bool)`

GetMenuClassListOk returns a tuple with the MenuClassList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuClassList

`func (o *CateringMenuClasses) SetMenuClassList(v []CateringMenuClassType)`

SetMenuClassList sets MenuClassList field to given value.

### HasMenuClassList

`func (o *CateringMenuClasses) HasMenuClassList() bool`

HasMenuClassList returns a boolean if a field has been set.

### GetLinks

`func (o *CateringMenuClasses) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringMenuClasses) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringMenuClasses) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringMenuClasses) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringMenuClasses) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringMenuClasses) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringMenuClasses) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringMenuClasses) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


