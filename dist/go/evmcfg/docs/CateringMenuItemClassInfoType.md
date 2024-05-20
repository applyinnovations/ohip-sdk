# CateringMenuItemClassInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClassName** | Pointer to **string** | Menu Item Class Name | [optional] 
**EventTypeList** | Pointer to **[]string** |  | [optional] 
**HotelId** | Pointer to **string** | The Hotel code which the menu item class belongs to | [optional] 
**IconName** | Pointer to **string** | Icon Name of the Menu Class | [optional] 
**MenuType** | Pointer to [**MenuTypeType**](MenuTypeType.md) |  | [optional] 
**ResponsibleDepartmentList** | Pointer to **[]string** |  | [optional] 
**Sequence** | Pointer to **int32** | Sequence of the Menu Class | [optional] 
**WebBookable** | Pointer to **bool** | Boolean value indicates whether the Menu Class is web bookable or not | [optional] 

## Methods

### NewCateringMenuItemClassInfoType

`func NewCateringMenuItemClassInfoType() *CateringMenuItemClassInfoType`

NewCateringMenuItemClassInfoType instantiates a new CateringMenuItemClassInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuItemClassInfoTypeWithDefaults

`func NewCateringMenuItemClassInfoTypeWithDefaults() *CateringMenuItemClassInfoType`

NewCateringMenuItemClassInfoTypeWithDefaults instantiates a new CateringMenuItemClassInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClassName

`func (o *CateringMenuItemClassInfoType) GetClassName() string`

GetClassName returns the ClassName field if non-nil, zero value otherwise.

### GetClassNameOk

`func (o *CateringMenuItemClassInfoType) GetClassNameOk() (*string, bool)`

GetClassNameOk returns a tuple with the ClassName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassName

`func (o *CateringMenuItemClassInfoType) SetClassName(v string)`

SetClassName sets ClassName field to given value.

### HasClassName

`func (o *CateringMenuItemClassInfoType) HasClassName() bool`

HasClassName returns a boolean if a field has been set.

### GetEventTypeList

`func (o *CateringMenuItemClassInfoType) GetEventTypeList() []string`

GetEventTypeList returns the EventTypeList field if non-nil, zero value otherwise.

### GetEventTypeListOk

`func (o *CateringMenuItemClassInfoType) GetEventTypeListOk() (*[]string, bool)`

GetEventTypeListOk returns a tuple with the EventTypeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypeList

`func (o *CateringMenuItemClassInfoType) SetEventTypeList(v []string)`

SetEventTypeList sets EventTypeList field to given value.

### HasEventTypeList

`func (o *CateringMenuItemClassInfoType) HasEventTypeList() bool`

HasEventTypeList returns a boolean if a field has been set.

### GetHotelId

`func (o *CateringMenuItemClassInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CateringMenuItemClassInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CateringMenuItemClassInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CateringMenuItemClassInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIconName

`func (o *CateringMenuItemClassInfoType) GetIconName() string`

GetIconName returns the IconName field if non-nil, zero value otherwise.

### GetIconNameOk

`func (o *CateringMenuItemClassInfoType) GetIconNameOk() (*string, bool)`

GetIconNameOk returns a tuple with the IconName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIconName

`func (o *CateringMenuItemClassInfoType) SetIconName(v string)`

SetIconName sets IconName field to given value.

### HasIconName

`func (o *CateringMenuItemClassInfoType) HasIconName() bool`

HasIconName returns a boolean if a field has been set.

### GetMenuType

`func (o *CateringMenuItemClassInfoType) GetMenuType() MenuTypeType`

GetMenuType returns the MenuType field if non-nil, zero value otherwise.

### GetMenuTypeOk

`func (o *CateringMenuItemClassInfoType) GetMenuTypeOk() (*MenuTypeType, bool)`

GetMenuTypeOk returns a tuple with the MenuType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuType

`func (o *CateringMenuItemClassInfoType) SetMenuType(v MenuTypeType)`

SetMenuType sets MenuType field to given value.

### HasMenuType

`func (o *CateringMenuItemClassInfoType) HasMenuType() bool`

HasMenuType returns a boolean if a field has been set.

### GetResponsibleDepartmentList

`func (o *CateringMenuItemClassInfoType) GetResponsibleDepartmentList() []string`

GetResponsibleDepartmentList returns the ResponsibleDepartmentList field if non-nil, zero value otherwise.

### GetResponsibleDepartmentListOk

`func (o *CateringMenuItemClassInfoType) GetResponsibleDepartmentListOk() (*[]string, bool)`

GetResponsibleDepartmentListOk returns a tuple with the ResponsibleDepartmentList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponsibleDepartmentList

`func (o *CateringMenuItemClassInfoType) SetResponsibleDepartmentList(v []string)`

SetResponsibleDepartmentList sets ResponsibleDepartmentList field to given value.

### HasResponsibleDepartmentList

`func (o *CateringMenuItemClassInfoType) HasResponsibleDepartmentList() bool`

HasResponsibleDepartmentList returns a boolean if a field has been set.

### GetSequence

`func (o *CateringMenuItemClassInfoType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *CateringMenuItemClassInfoType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *CateringMenuItemClassInfoType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *CateringMenuItemClassInfoType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetWebBookable

`func (o *CateringMenuItemClassInfoType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *CateringMenuItemClassInfoType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *CateringMenuItemClassInfoType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *CateringMenuItemClassInfoType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


