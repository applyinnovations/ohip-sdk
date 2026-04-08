# EventMenuType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BasicInfo** | Pointer to [**EventMenuBasicInfoType**](EventMenuBasicInfoType.md) |  | [optional] 
**Revenues** | Pointer to [**[]EventMenuRevenueType**](EventMenuRevenueType.md) |  | [optional] 
**MenuItems** | Pointer to [**[]EventMenuItemType**](EventMenuItemType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code of the Resource. | [optional] 

## Methods

### NewEventMenuType

`func NewEventMenuType() *EventMenuType`

NewEventMenuType instantiates a new EventMenuType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventMenuTypeWithDefaults

`func NewEventMenuTypeWithDefaults() *EventMenuType`

NewEventMenuTypeWithDefaults instantiates a new EventMenuType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBasicInfo

`func (o *EventMenuType) GetBasicInfo() EventMenuBasicInfoType`

GetBasicInfo returns the BasicInfo field if non-nil, zero value otherwise.

### GetBasicInfoOk

`func (o *EventMenuType) GetBasicInfoOk() (*EventMenuBasicInfoType, bool)`

GetBasicInfoOk returns a tuple with the BasicInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasicInfo

`func (o *EventMenuType) SetBasicInfo(v EventMenuBasicInfoType)`

SetBasicInfo sets BasicInfo field to given value.

### HasBasicInfo

`func (o *EventMenuType) HasBasicInfo() bool`

HasBasicInfo returns a boolean if a field has been set.

### GetRevenues

`func (o *EventMenuType) GetRevenues() []EventMenuRevenueType`

GetRevenues returns the Revenues field if non-nil, zero value otherwise.

### GetRevenuesOk

`func (o *EventMenuType) GetRevenuesOk() (*[]EventMenuRevenueType, bool)`

GetRevenuesOk returns a tuple with the Revenues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenues

`func (o *EventMenuType) SetRevenues(v []EventMenuRevenueType)`

SetRevenues sets Revenues field to given value.

### HasRevenues

`func (o *EventMenuType) HasRevenues() bool`

HasRevenues returns a boolean if a field has been set.

### GetMenuItems

`func (o *EventMenuType) GetMenuItems() []EventMenuItemType`

GetMenuItems returns the MenuItems field if non-nil, zero value otherwise.

### GetMenuItemsOk

`func (o *EventMenuType) GetMenuItemsOk() (*[]EventMenuItemType, bool)`

GetMenuItemsOk returns a tuple with the MenuItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuItems

`func (o *EventMenuType) SetMenuItems(v []EventMenuItemType)`

SetMenuItems sets MenuItems field to given value.

### HasMenuItems

`func (o *EventMenuType) HasMenuItems() bool`

HasMenuItems returns a boolean if a field has been set.

### GetHotelId

`func (o *EventMenuType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EventMenuType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EventMenuType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EventMenuType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


