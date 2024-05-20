# SuspendedAddressesInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressId** | Pointer to **int32** | Corporate id of the profile. | [optional] 
**ClientID** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Country** | Pointer to [**CountryNameType**](CountryNameType.md) |  | [optional] 
**FirstName** | Pointer to **string** | First Name of the Profile against which the Suspended Addresses are fetched. | [optional] 
**HotelId** | Pointer to **string** | Resort of the Profile | [optional] 
**MatchCode** | Pointer to **string** | Match Code of the Address Validation Performed from the batch processing | [optional] 
**Name** | Pointer to **string** | Last Name of the Profile against which the Suspended Addresses are fetched. | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileType** | Pointer to **string** | Profile Type of the Profile against which the Suspended Addresses are fetched.. | [optional] 
**ValidateDate** | Pointer to **string** | Validate Date. | [optional] 

## Methods

### NewSuspendedAddressesInfoType

`func NewSuspendedAddressesInfoType() *SuspendedAddressesInfoType`

NewSuspendedAddressesInfoType instantiates a new SuspendedAddressesInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSuspendedAddressesInfoTypeWithDefaults

`func NewSuspendedAddressesInfoTypeWithDefaults() *SuspendedAddressesInfoType`

NewSuspendedAddressesInfoTypeWithDefaults instantiates a new SuspendedAddressesInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddressId

`func (o *SuspendedAddressesInfoType) GetAddressId() int32`

GetAddressId returns the AddressId field if non-nil, zero value otherwise.

### GetAddressIdOk

`func (o *SuspendedAddressesInfoType) GetAddressIdOk() (*int32, bool)`

GetAddressIdOk returns a tuple with the AddressId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressId

`func (o *SuspendedAddressesInfoType) SetAddressId(v int32)`

SetAddressId sets AddressId field to given value.

### HasAddressId

`func (o *SuspendedAddressesInfoType) HasAddressId() bool`

HasAddressId returns a boolean if a field has been set.

### GetClientID

`func (o *SuspendedAddressesInfoType) GetClientID() UniqueIDType`

GetClientID returns the ClientID field if non-nil, zero value otherwise.

### GetClientIDOk

`func (o *SuspendedAddressesInfoType) GetClientIDOk() (*UniqueIDType, bool)`

GetClientIDOk returns a tuple with the ClientID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientID

`func (o *SuspendedAddressesInfoType) SetClientID(v UniqueIDType)`

SetClientID sets ClientID field to given value.

### HasClientID

`func (o *SuspendedAddressesInfoType) HasClientID() bool`

HasClientID returns a boolean if a field has been set.

### GetCountry

`func (o *SuspendedAddressesInfoType) GetCountry() CountryNameType`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *SuspendedAddressesInfoType) GetCountryOk() (*CountryNameType, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *SuspendedAddressesInfoType) SetCountry(v CountryNameType)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *SuspendedAddressesInfoType) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetFirstName

`func (o *SuspendedAddressesInfoType) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *SuspendedAddressesInfoType) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *SuspendedAddressesInfoType) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *SuspendedAddressesInfoType) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetHotelId

`func (o *SuspendedAddressesInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SuspendedAddressesInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SuspendedAddressesInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SuspendedAddressesInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMatchCode

`func (o *SuspendedAddressesInfoType) GetMatchCode() string`

GetMatchCode returns the MatchCode field if non-nil, zero value otherwise.

### GetMatchCodeOk

`func (o *SuspendedAddressesInfoType) GetMatchCodeOk() (*string, bool)`

GetMatchCodeOk returns a tuple with the MatchCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchCode

`func (o *SuspendedAddressesInfoType) SetMatchCode(v string)`

SetMatchCode sets MatchCode field to given value.

### HasMatchCode

`func (o *SuspendedAddressesInfoType) HasMatchCode() bool`

HasMatchCode returns a boolean if a field has been set.

### GetName

`func (o *SuspendedAddressesInfoType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SuspendedAddressesInfoType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SuspendedAddressesInfoType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SuspendedAddressesInfoType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetProfileId

`func (o *SuspendedAddressesInfoType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *SuspendedAddressesInfoType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *SuspendedAddressesInfoType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *SuspendedAddressesInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetProfileType

`func (o *SuspendedAddressesInfoType) GetProfileType() string`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *SuspendedAddressesInfoType) GetProfileTypeOk() (*string, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *SuspendedAddressesInfoType) SetProfileType(v string)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *SuspendedAddressesInfoType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetValidateDate

`func (o *SuspendedAddressesInfoType) GetValidateDate() string`

GetValidateDate returns the ValidateDate field if non-nil, zero value otherwise.

### GetValidateDateOk

`func (o *SuspendedAddressesInfoType) GetValidateDateOk() (*string, bool)`

GetValidateDateOk returns a tuple with the ValidateDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateDate

`func (o *SuspendedAddressesInfoType) SetValidateDate(v string)`

SetValidateDate sets ValidateDate field to given value.

### HasValidateDate

`func (o *SuspendedAddressesInfoType) HasValidateDate() bool`

HasValidateDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


