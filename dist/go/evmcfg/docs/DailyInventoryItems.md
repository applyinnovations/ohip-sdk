# DailyInventoryItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DailyItems** | Pointer to [**[]DailyInventoryItemType**](DailyInventoryItemType.md) | List of Daily Inventory Items. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDailyInventoryItems

`func NewDailyInventoryItems() *DailyInventoryItems`

NewDailyInventoryItems instantiates a new DailyInventoryItems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDailyInventoryItemsWithDefaults

`func NewDailyInventoryItemsWithDefaults() *DailyInventoryItems`

NewDailyInventoryItemsWithDefaults instantiates a new DailyInventoryItems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDailyItems

`func (o *DailyInventoryItems) GetDailyItems() []DailyInventoryItemType`

GetDailyItems returns the DailyItems field if non-nil, zero value otherwise.

### GetDailyItemsOk

`func (o *DailyInventoryItems) GetDailyItemsOk() (*[]DailyInventoryItemType, bool)`

GetDailyItemsOk returns a tuple with the DailyItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyItems

`func (o *DailyInventoryItems) SetDailyItems(v []DailyInventoryItemType)`

SetDailyItems sets DailyItems field to given value.

### HasDailyItems

`func (o *DailyInventoryItems) HasDailyItems() bool`

HasDailyItems returns a boolean if a field has been set.

### GetLinks

`func (o *DailyInventoryItems) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DailyInventoryItems) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DailyInventoryItems) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DailyInventoryItems) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DailyInventoryItems) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DailyInventoryItems) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DailyInventoryItems) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DailyInventoryItems) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


