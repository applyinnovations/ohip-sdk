# InterfaceRoomStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code | [optional] 
**Logo** | Pointer to **string** | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. | [optional] 
**EntryCode** | Pointer to **string** | Entry code of a Hotel Interface Room Status. | [optional] 
**Status** | Pointer to **string** | Room Status which is either Vacant (V) or Occupied (O). | [optional] 
**HousekeepingStatus** | Pointer to **string** | Housekeeping status of a room. | [optional] 
**CustomRoomTranslation** | Pointer to **string** | Custom Room Translation of a Hotel Interface. It is a concatenation of a Status (V-Vacant or O-Occupied) and Housekeeping Status (IS-Inspected, CL-Clean, etc.) The delimiter is a period. Sample values are V.IS, V.CL, O.IS, O.CL. | [optional] 
**Description** | Pointer to **string** | Description of the Hotel Interface Room Status. | [optional] 
**InterfaceRoomStatusId** | Pointer to **int32** | Row number to identify all the records belonging to a single group of Hotel Interface Room Status. | [optional] 

## Methods

### NewInterfaceRoomStatusType

`func NewInterfaceRoomStatusType() *InterfaceRoomStatusType`

NewInterfaceRoomStatusType instantiates a new InterfaceRoomStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceRoomStatusTypeWithDefaults

`func NewInterfaceRoomStatusTypeWithDefaults() *InterfaceRoomStatusType`

NewInterfaceRoomStatusTypeWithDefaults instantiates a new InterfaceRoomStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *InterfaceRoomStatusType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InterfaceRoomStatusType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InterfaceRoomStatusType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InterfaceRoomStatusType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLogo

`func (o *InterfaceRoomStatusType) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *InterfaceRoomStatusType) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *InterfaceRoomStatusType) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *InterfaceRoomStatusType) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetEntryCode

`func (o *InterfaceRoomStatusType) GetEntryCode() string`

GetEntryCode returns the EntryCode field if non-nil, zero value otherwise.

### GetEntryCodeOk

`func (o *InterfaceRoomStatusType) GetEntryCodeOk() (*string, bool)`

GetEntryCodeOk returns a tuple with the EntryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntryCode

`func (o *InterfaceRoomStatusType) SetEntryCode(v string)`

SetEntryCode sets EntryCode field to given value.

### HasEntryCode

`func (o *InterfaceRoomStatusType) HasEntryCode() bool`

HasEntryCode returns a boolean if a field has been set.

### GetStatus

`func (o *InterfaceRoomStatusType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InterfaceRoomStatusType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InterfaceRoomStatusType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *InterfaceRoomStatusType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetHousekeepingStatus

`func (o *InterfaceRoomStatusType) GetHousekeepingStatus() string`

GetHousekeepingStatus returns the HousekeepingStatus field if non-nil, zero value otherwise.

### GetHousekeepingStatusOk

`func (o *InterfaceRoomStatusType) GetHousekeepingStatusOk() (*string, bool)`

GetHousekeepingStatusOk returns a tuple with the HousekeepingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingStatus

`func (o *InterfaceRoomStatusType) SetHousekeepingStatus(v string)`

SetHousekeepingStatus sets HousekeepingStatus field to given value.

### HasHousekeepingStatus

`func (o *InterfaceRoomStatusType) HasHousekeepingStatus() bool`

HasHousekeepingStatus returns a boolean if a field has been set.

### GetCustomRoomTranslation

`func (o *InterfaceRoomStatusType) GetCustomRoomTranslation() string`

GetCustomRoomTranslation returns the CustomRoomTranslation field if non-nil, zero value otherwise.

### GetCustomRoomTranslationOk

`func (o *InterfaceRoomStatusType) GetCustomRoomTranslationOk() (*string, bool)`

GetCustomRoomTranslationOk returns a tuple with the CustomRoomTranslation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomRoomTranslation

`func (o *InterfaceRoomStatusType) SetCustomRoomTranslation(v string)`

SetCustomRoomTranslation sets CustomRoomTranslation field to given value.

### HasCustomRoomTranslation

`func (o *InterfaceRoomStatusType) HasCustomRoomTranslation() bool`

HasCustomRoomTranslation returns a boolean if a field has been set.

### GetDescription

`func (o *InterfaceRoomStatusType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *InterfaceRoomStatusType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *InterfaceRoomStatusType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *InterfaceRoomStatusType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInterfaceRoomStatusId

`func (o *InterfaceRoomStatusType) GetInterfaceRoomStatusId() int32`

GetInterfaceRoomStatusId returns the InterfaceRoomStatusId field if non-nil, zero value otherwise.

### GetInterfaceRoomStatusIdOk

`func (o *InterfaceRoomStatusType) GetInterfaceRoomStatusIdOk() (*int32, bool)`

GetInterfaceRoomStatusIdOk returns a tuple with the InterfaceRoomStatusId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceRoomStatusId

`func (o *InterfaceRoomStatusType) SetInterfaceRoomStatusId(v int32)`

SetInterfaceRoomStatusId sets InterfaceRoomStatusId field to given value.

### HasInterfaceRoomStatusId

`func (o *InterfaceRoomStatusType) HasInterfaceRoomStatusId() bool`

HasInterfaceRoomStatusId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


