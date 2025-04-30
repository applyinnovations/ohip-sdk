# HotelContactType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | The code of the hotel. | [optional] 
**Name** | Pointer to **string** | Name of the hotel contact. | [optional] 
**Roles** | Pointer to [**[]HotelContactRoleType**](HotelContactRoleType.md) | Lists of HotelContactRoles of the hotel. | [optional] 
**OwnerCode** | Pointer to **string** | The contact&#39;s code in the hotel. | [optional] 
**CommunicationMethod** | Pointer to **string** | The preferred method of communication for the contact. | [optional] 
**CommunicationAddress** | Pointer to **string** | Details about the preferred communication method. Example: email address, fax number, etc. | [optional] 
**Primary** | Pointer to **bool** | Primary flag. | [optional] 

## Methods

### NewHotelContactType

`func NewHotelContactType() *HotelContactType`

NewHotelContactType instantiates a new HotelContactType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelContactTypeWithDefaults

`func NewHotelContactTypeWithDefaults() *HotelContactType`

NewHotelContactTypeWithDefaults instantiates a new HotelContactType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNameId

`func (o *HotelContactType) GetNameId() UniqueIDType`

GetNameId returns the NameId field if non-nil, zero value otherwise.

### GetNameIdOk

`func (o *HotelContactType) GetNameIdOk() (*UniqueIDType, bool)`

GetNameIdOk returns a tuple with the NameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameId

`func (o *HotelContactType) SetNameId(v UniqueIDType)`

SetNameId sets NameId field to given value.

### HasNameId

`func (o *HotelContactType) HasNameId() bool`

HasNameId returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelContactType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelContactType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelContactType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelContactType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetName

`func (o *HotelContactType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *HotelContactType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *HotelContactType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *HotelContactType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRoles

`func (o *HotelContactType) GetRoles() []HotelContactRoleType`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *HotelContactType) GetRolesOk() (*[]HotelContactRoleType, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *HotelContactType) SetRoles(v []HotelContactRoleType)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *HotelContactType) HasRoles() bool`

HasRoles returns a boolean if a field has been set.

### GetOwnerCode

`func (o *HotelContactType) GetOwnerCode() string`

GetOwnerCode returns the OwnerCode field if non-nil, zero value otherwise.

### GetOwnerCodeOk

`func (o *HotelContactType) GetOwnerCodeOk() (*string, bool)`

GetOwnerCodeOk returns a tuple with the OwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCode

`func (o *HotelContactType) SetOwnerCode(v string)`

SetOwnerCode sets OwnerCode field to given value.

### HasOwnerCode

`func (o *HotelContactType) HasOwnerCode() bool`

HasOwnerCode returns a boolean if a field has been set.

### GetCommunicationMethod

`func (o *HotelContactType) GetCommunicationMethod() string`

GetCommunicationMethod returns the CommunicationMethod field if non-nil, zero value otherwise.

### GetCommunicationMethodOk

`func (o *HotelContactType) GetCommunicationMethodOk() (*string, bool)`

GetCommunicationMethodOk returns a tuple with the CommunicationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationMethod

`func (o *HotelContactType) SetCommunicationMethod(v string)`

SetCommunicationMethod sets CommunicationMethod field to given value.

### HasCommunicationMethod

`func (o *HotelContactType) HasCommunicationMethod() bool`

HasCommunicationMethod returns a boolean if a field has been set.

### GetCommunicationAddress

`func (o *HotelContactType) GetCommunicationAddress() string`

GetCommunicationAddress returns the CommunicationAddress field if non-nil, zero value otherwise.

### GetCommunicationAddressOk

`func (o *HotelContactType) GetCommunicationAddressOk() (*string, bool)`

GetCommunicationAddressOk returns a tuple with the CommunicationAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationAddress

`func (o *HotelContactType) SetCommunicationAddress(v string)`

SetCommunicationAddress sets CommunicationAddress field to given value.

### HasCommunicationAddress

`func (o *HotelContactType) HasCommunicationAddress() bool`

HasCommunicationAddress returns a boolean if a field has been set.

### GetPrimary

`func (o *HotelContactType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *HotelContactType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *HotelContactType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *HotelContactType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


