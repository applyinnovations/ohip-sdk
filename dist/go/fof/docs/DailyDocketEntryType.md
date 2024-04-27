# DailyDocketEntryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Department** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Details** | Pointer to **string** | Entry details. | [optional] 
**DocketEntryId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EntryDate** | Pointer to **string** | The date-time in which the log book entry was created. | [optional] 
**History** | Pointer to [**ChangeHistoryType**](ChangeHistoryType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code of the log book entry. | [optional] 
**RoleUserEntry** | Pointer to [**RoleUserEntryType**](RoleUserEntryType.md) |  | [optional] 

## Methods

### NewDailyDocketEntryType

`func NewDailyDocketEntryType() *DailyDocketEntryType`

NewDailyDocketEntryType instantiates a new DailyDocketEntryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDailyDocketEntryTypeWithDefaults

`func NewDailyDocketEntryTypeWithDefaults() *DailyDocketEntryType`

NewDailyDocketEntryTypeWithDefaults instantiates a new DailyDocketEntryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepartment

`func (o *DailyDocketEntryType) GetDepartment() CodeDescriptionType`

GetDepartment returns the Department field if non-nil, zero value otherwise.

### GetDepartmentOk

`func (o *DailyDocketEntryType) GetDepartmentOk() (*CodeDescriptionType, bool)`

GetDepartmentOk returns a tuple with the Department field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartment

`func (o *DailyDocketEntryType) SetDepartment(v CodeDescriptionType)`

SetDepartment sets Department field to given value.

### HasDepartment

`func (o *DailyDocketEntryType) HasDepartment() bool`

HasDepartment returns a boolean if a field has been set.

### GetDetails

`func (o *DailyDocketEntryType) GetDetails() string`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *DailyDocketEntryType) GetDetailsOk() (*string, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *DailyDocketEntryType) SetDetails(v string)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *DailyDocketEntryType) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetDocketEntryId

`func (o *DailyDocketEntryType) GetDocketEntryId() UniqueIDType`

GetDocketEntryId returns the DocketEntryId field if non-nil, zero value otherwise.

### GetDocketEntryIdOk

`func (o *DailyDocketEntryType) GetDocketEntryIdOk() (*UniqueIDType, bool)`

GetDocketEntryIdOk returns a tuple with the DocketEntryId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocketEntryId

`func (o *DailyDocketEntryType) SetDocketEntryId(v UniqueIDType)`

SetDocketEntryId sets DocketEntryId field to given value.

### HasDocketEntryId

`func (o *DailyDocketEntryType) HasDocketEntryId() bool`

HasDocketEntryId returns a boolean if a field has been set.

### GetEntryDate

`func (o *DailyDocketEntryType) GetEntryDate() string`

GetEntryDate returns the EntryDate field if non-nil, zero value otherwise.

### GetEntryDateOk

`func (o *DailyDocketEntryType) GetEntryDateOk() (*string, bool)`

GetEntryDateOk returns a tuple with the EntryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntryDate

`func (o *DailyDocketEntryType) SetEntryDate(v string)`

SetEntryDate sets EntryDate field to given value.

### HasEntryDate

`func (o *DailyDocketEntryType) HasEntryDate() bool`

HasEntryDate returns a boolean if a field has been set.

### GetHistory

`func (o *DailyDocketEntryType) GetHistory() ChangeHistoryType`

GetHistory returns the History field if non-nil, zero value otherwise.

### GetHistoryOk

`func (o *DailyDocketEntryType) GetHistoryOk() (*ChangeHistoryType, bool)`

GetHistoryOk returns a tuple with the History field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistory

`func (o *DailyDocketEntryType) SetHistory(v ChangeHistoryType)`

SetHistory sets History field to given value.

### HasHistory

`func (o *DailyDocketEntryType) HasHistory() bool`

HasHistory returns a boolean if a field has been set.

### GetHotelId

`func (o *DailyDocketEntryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DailyDocketEntryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DailyDocketEntryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DailyDocketEntryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoleUserEntry

`func (o *DailyDocketEntryType) GetRoleUserEntry() RoleUserEntryType`

GetRoleUserEntry returns the RoleUserEntry field if non-nil, zero value otherwise.

### GetRoleUserEntryOk

`func (o *DailyDocketEntryType) GetRoleUserEntryOk() (*RoleUserEntryType, bool)`

GetRoleUserEntryOk returns a tuple with the RoleUserEntry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleUserEntry

`func (o *DailyDocketEntryType) SetRoleUserEntry(v RoleUserEntryType)`

SetRoleUserEntry sets RoleUserEntry field to given value.

### HasRoleUserEntry

`func (o *DailyDocketEntryType) HasRoleUserEntry() bool`

HasRoleUserEntry returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


