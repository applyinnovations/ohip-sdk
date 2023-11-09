# CateringMenuClassInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventTypes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**Inactive** | Pointer to **bool** | Return true, when this Menu Item Class will not be available to be associated to a Catering Event. | [optional] 
**InactiveDate** | Pointer to **string** | Inactive date of menu class. | [optional] 
**Name** | Pointer to **string** | This type holds name of Menu Class. | [optional] 
**WebBookable** | Pointer to **bool** | This type tells about whether menu class is book through web or not. | [optional] 

## Methods

### NewCateringMenuClassInfoType

`func NewCateringMenuClassInfoType() *CateringMenuClassInfoType`

NewCateringMenuClassInfoType instantiates a new CateringMenuClassInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuClassInfoTypeWithDefaults

`func NewCateringMenuClassInfoTypeWithDefaults() *CateringMenuClassInfoType`

NewCateringMenuClassInfoTypeWithDefaults instantiates a new CateringMenuClassInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventTypes

`func (o *CateringMenuClassInfoType) GetEventTypes() CodeListType`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *CateringMenuClassInfoType) GetEventTypesOk() (*CodeListType, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *CateringMenuClassInfoType) SetEventTypes(v CodeListType)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *CateringMenuClassInfoType) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetInactive

`func (o *CateringMenuClassInfoType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *CateringMenuClassInfoType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *CateringMenuClassInfoType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *CateringMenuClassInfoType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetInactiveDate

`func (o *CateringMenuClassInfoType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *CateringMenuClassInfoType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *CateringMenuClassInfoType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *CateringMenuClassInfoType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetName

`func (o *CateringMenuClassInfoType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CateringMenuClassInfoType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CateringMenuClassInfoType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CateringMenuClassInfoType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetWebBookable

`func (o *CateringMenuClassInfoType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *CateringMenuClassInfoType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *CateringMenuClassInfoType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *CateringMenuClassInfoType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


