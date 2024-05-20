# RoomOwnerReferralType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndDate** | Pointer to **string** | End Date of the Room Owner Referral record. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code of Room Owner Referral record. | [optional] 
**Inactive** | Pointer to **bool** | Status of the Room Owner Referral record. | [optional] 
**InactiveDate** | Pointer to **string** | Date in which the room owner referral record was marked as inactive. | [optional] 
**ProfileAddress** | Pointer to [**AddressType**](AddressType.md) |  | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileName** | Pointer to [**ProfileNameType**](ProfileNameType.md) |  | [optional] 
**Referral** | Pointer to [**ReferralType**](ReferralType.md) |  | [optional] 
**RoomId** | Pointer to **string** | Room Id of Room Owner Referral record. | [optional] 
**RoomOwnerId** | Pointer to **float32** | Unique Id for Room Ownership record. | [optional] 
**RoomOwnerReferralId** | Pointer to **float32** | Unique Id for Room Owner Referral record. | [optional] 
**StartDate** | Pointer to **string** | Start Date of the Room Owner Referral record. | [optional] 

## Methods

### NewRoomOwnerReferralType

`func NewRoomOwnerReferralType() *RoomOwnerReferralType`

NewRoomOwnerReferralType instantiates a new RoomOwnerReferralType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomOwnerReferralTypeWithDefaults

`func NewRoomOwnerReferralTypeWithDefaults() *RoomOwnerReferralType`

NewRoomOwnerReferralTypeWithDefaults instantiates a new RoomOwnerReferralType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndDate

`func (o *RoomOwnerReferralType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *RoomOwnerReferralType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *RoomOwnerReferralType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *RoomOwnerReferralType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomOwnerReferralType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomOwnerReferralType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomOwnerReferralType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomOwnerReferralType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *RoomOwnerReferralType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *RoomOwnerReferralType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *RoomOwnerReferralType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *RoomOwnerReferralType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetInactiveDate

`func (o *RoomOwnerReferralType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *RoomOwnerReferralType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *RoomOwnerReferralType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *RoomOwnerReferralType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetProfileAddress

`func (o *RoomOwnerReferralType) GetProfileAddress() AddressType`

GetProfileAddress returns the ProfileAddress field if non-nil, zero value otherwise.

### GetProfileAddressOk

`func (o *RoomOwnerReferralType) GetProfileAddressOk() (*AddressType, bool)`

GetProfileAddressOk returns a tuple with the ProfileAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAddress

`func (o *RoomOwnerReferralType) SetProfileAddress(v AddressType)`

SetProfileAddress sets ProfileAddress field to given value.

### HasProfileAddress

`func (o *RoomOwnerReferralType) HasProfileAddress() bool`

HasProfileAddress returns a boolean if a field has been set.

### GetProfileId

`func (o *RoomOwnerReferralType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *RoomOwnerReferralType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *RoomOwnerReferralType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *RoomOwnerReferralType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetProfileName

`func (o *RoomOwnerReferralType) GetProfileName() ProfileNameType`

GetProfileName returns the ProfileName field if non-nil, zero value otherwise.

### GetProfileNameOk

`func (o *RoomOwnerReferralType) GetProfileNameOk() (*ProfileNameType, bool)`

GetProfileNameOk returns a tuple with the ProfileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileName

`func (o *RoomOwnerReferralType) SetProfileName(v ProfileNameType)`

SetProfileName sets ProfileName field to given value.

### HasProfileName

`func (o *RoomOwnerReferralType) HasProfileName() bool`

HasProfileName returns a boolean if a field has been set.

### GetReferral

`func (o *RoomOwnerReferralType) GetReferral() ReferralType`

GetReferral returns the Referral field if non-nil, zero value otherwise.

### GetReferralOk

`func (o *RoomOwnerReferralType) GetReferralOk() (*ReferralType, bool)`

GetReferralOk returns a tuple with the Referral field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferral

`func (o *RoomOwnerReferralType) SetReferral(v ReferralType)`

SetReferral sets Referral field to given value.

### HasReferral

`func (o *RoomOwnerReferralType) HasReferral() bool`

HasReferral returns a boolean if a field has been set.

### GetRoomId

`func (o *RoomOwnerReferralType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomOwnerReferralType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomOwnerReferralType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoomOwnerReferralType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomOwnerId

`func (o *RoomOwnerReferralType) GetRoomOwnerId() float32`

GetRoomOwnerId returns the RoomOwnerId field if non-nil, zero value otherwise.

### GetRoomOwnerIdOk

`func (o *RoomOwnerReferralType) GetRoomOwnerIdOk() (*float32, bool)`

GetRoomOwnerIdOk returns a tuple with the RoomOwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnerId

`func (o *RoomOwnerReferralType) SetRoomOwnerId(v float32)`

SetRoomOwnerId sets RoomOwnerId field to given value.

### HasRoomOwnerId

`func (o *RoomOwnerReferralType) HasRoomOwnerId() bool`

HasRoomOwnerId returns a boolean if a field has been set.

### GetRoomOwnerReferralId

`func (o *RoomOwnerReferralType) GetRoomOwnerReferralId() float32`

GetRoomOwnerReferralId returns the RoomOwnerReferralId field if non-nil, zero value otherwise.

### GetRoomOwnerReferralIdOk

`func (o *RoomOwnerReferralType) GetRoomOwnerReferralIdOk() (*float32, bool)`

GetRoomOwnerReferralIdOk returns a tuple with the RoomOwnerReferralId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnerReferralId

`func (o *RoomOwnerReferralType) SetRoomOwnerReferralId(v float32)`

SetRoomOwnerReferralId sets RoomOwnerReferralId field to given value.

### HasRoomOwnerReferralId

`func (o *RoomOwnerReferralType) HasRoomOwnerReferralId() bool`

HasRoomOwnerReferralId returns a boolean if a field has been set.

### GetStartDate

`func (o *RoomOwnerReferralType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *RoomOwnerReferralType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *RoomOwnerReferralType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *RoomOwnerReferralType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


