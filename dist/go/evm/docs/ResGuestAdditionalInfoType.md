# ResGuestAdditionalInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PortOfEntry** | Pointer to **string** | Entry point into the country. (Croatian Requirements). | [optional] 
**DateOfEntry** | Pointer to **string** | Entry Date into the country. (Croatian Requirements). | [optional] 
**NextDestination** | Pointer to **string** | Entry Date into the country. (Croatian Requirements). | [optional] 
**PreferredRoomType** | Pointer to **string** | Preferred Room Type of the guest. | [optional] 
**LastStay** | Pointer to [**GuestLastStayInfoType**](GuestLastStayInfoType.md) |  | [optional] 
**PurposeOfStay** | Pointer to **string** | Purpose of stay. | [optional] 
**GuestClassification** | Pointer to **string** | Guest Classification for the data export. | [optional] 
**GuestStatus** | Pointer to **string** | Guest Status for the data export. | [optional] 

## Methods

### NewResGuestAdditionalInfoType

`func NewResGuestAdditionalInfoType() *ResGuestAdditionalInfoType`

NewResGuestAdditionalInfoType instantiates a new ResGuestAdditionalInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResGuestAdditionalInfoTypeWithDefaults

`func NewResGuestAdditionalInfoTypeWithDefaults() *ResGuestAdditionalInfoType`

NewResGuestAdditionalInfoTypeWithDefaults instantiates a new ResGuestAdditionalInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPortOfEntry

`func (o *ResGuestAdditionalInfoType) GetPortOfEntry() string`

GetPortOfEntry returns the PortOfEntry field if non-nil, zero value otherwise.

### GetPortOfEntryOk

`func (o *ResGuestAdditionalInfoType) GetPortOfEntryOk() (*string, bool)`

GetPortOfEntryOk returns a tuple with the PortOfEntry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortOfEntry

`func (o *ResGuestAdditionalInfoType) SetPortOfEntry(v string)`

SetPortOfEntry sets PortOfEntry field to given value.

### HasPortOfEntry

`func (o *ResGuestAdditionalInfoType) HasPortOfEntry() bool`

HasPortOfEntry returns a boolean if a field has been set.

### GetDateOfEntry

`func (o *ResGuestAdditionalInfoType) GetDateOfEntry() string`

GetDateOfEntry returns the DateOfEntry field if non-nil, zero value otherwise.

### GetDateOfEntryOk

`func (o *ResGuestAdditionalInfoType) GetDateOfEntryOk() (*string, bool)`

GetDateOfEntryOk returns a tuple with the DateOfEntry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateOfEntry

`func (o *ResGuestAdditionalInfoType) SetDateOfEntry(v string)`

SetDateOfEntry sets DateOfEntry field to given value.

### HasDateOfEntry

`func (o *ResGuestAdditionalInfoType) HasDateOfEntry() bool`

HasDateOfEntry returns a boolean if a field has been set.

### GetNextDestination

`func (o *ResGuestAdditionalInfoType) GetNextDestination() string`

GetNextDestination returns the NextDestination field if non-nil, zero value otherwise.

### GetNextDestinationOk

`func (o *ResGuestAdditionalInfoType) GetNextDestinationOk() (*string, bool)`

GetNextDestinationOk returns a tuple with the NextDestination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextDestination

`func (o *ResGuestAdditionalInfoType) SetNextDestination(v string)`

SetNextDestination sets NextDestination field to given value.

### HasNextDestination

`func (o *ResGuestAdditionalInfoType) HasNextDestination() bool`

HasNextDestination returns a boolean if a field has been set.

### GetPreferredRoomType

`func (o *ResGuestAdditionalInfoType) GetPreferredRoomType() string`

GetPreferredRoomType returns the PreferredRoomType field if non-nil, zero value otherwise.

### GetPreferredRoomTypeOk

`func (o *ResGuestAdditionalInfoType) GetPreferredRoomTypeOk() (*string, bool)`

GetPreferredRoomTypeOk returns a tuple with the PreferredRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferredRoomType

`func (o *ResGuestAdditionalInfoType) SetPreferredRoomType(v string)`

SetPreferredRoomType sets PreferredRoomType field to given value.

### HasPreferredRoomType

`func (o *ResGuestAdditionalInfoType) HasPreferredRoomType() bool`

HasPreferredRoomType returns a boolean if a field has been set.

### GetLastStay

`func (o *ResGuestAdditionalInfoType) GetLastStay() GuestLastStayInfoType`

GetLastStay returns the LastStay field if non-nil, zero value otherwise.

### GetLastStayOk

`func (o *ResGuestAdditionalInfoType) GetLastStayOk() (*GuestLastStayInfoType, bool)`

GetLastStayOk returns a tuple with the LastStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStay

`func (o *ResGuestAdditionalInfoType) SetLastStay(v GuestLastStayInfoType)`

SetLastStay sets LastStay field to given value.

### HasLastStay

`func (o *ResGuestAdditionalInfoType) HasLastStay() bool`

HasLastStay returns a boolean if a field has been set.

### GetPurposeOfStay

`func (o *ResGuestAdditionalInfoType) GetPurposeOfStay() string`

GetPurposeOfStay returns the PurposeOfStay field if non-nil, zero value otherwise.

### GetPurposeOfStayOk

`func (o *ResGuestAdditionalInfoType) GetPurposeOfStayOk() (*string, bool)`

GetPurposeOfStayOk returns a tuple with the PurposeOfStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurposeOfStay

`func (o *ResGuestAdditionalInfoType) SetPurposeOfStay(v string)`

SetPurposeOfStay sets PurposeOfStay field to given value.

### HasPurposeOfStay

`func (o *ResGuestAdditionalInfoType) HasPurposeOfStay() bool`

HasPurposeOfStay returns a boolean if a field has been set.

### GetGuestClassification

`func (o *ResGuestAdditionalInfoType) GetGuestClassification() string`

GetGuestClassification returns the GuestClassification field if non-nil, zero value otherwise.

### GetGuestClassificationOk

`func (o *ResGuestAdditionalInfoType) GetGuestClassificationOk() (*string, bool)`

GetGuestClassificationOk returns a tuple with the GuestClassification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestClassification

`func (o *ResGuestAdditionalInfoType) SetGuestClassification(v string)`

SetGuestClassification sets GuestClassification field to given value.

### HasGuestClassification

`func (o *ResGuestAdditionalInfoType) HasGuestClassification() bool`

HasGuestClassification returns a boolean if a field has been set.

### GetGuestStatus

`func (o *ResGuestAdditionalInfoType) GetGuestStatus() string`

GetGuestStatus returns the GuestStatus field if non-nil, zero value otherwise.

### GetGuestStatusOk

`func (o *ResGuestAdditionalInfoType) GetGuestStatusOk() (*string, bool)`

GetGuestStatusOk returns a tuple with the GuestStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestStatus

`func (o *ResGuestAdditionalInfoType) SetGuestStatus(v string)`

SetGuestStatus sets GuestStatus field to given value.

### HasGuestStatus

`func (o *ResGuestAdditionalInfoType) HasGuestStatus() bool`

HasGuestStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


