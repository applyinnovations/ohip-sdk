# MembershipAwardPointsByHotel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipAwardPoints** | Pointer to [**[]MembershipAwardPointByHotelType**](MembershipAwardPointByHotelType.md) | List of available award points information by Hotel. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipAwardPointsByHotel

`func NewMembershipAwardPointsByHotel() *MembershipAwardPointsByHotel`

NewMembershipAwardPointsByHotel instantiates a new MembershipAwardPointsByHotel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipAwardPointsByHotelWithDefaults

`func NewMembershipAwardPointsByHotelWithDefaults() *MembershipAwardPointsByHotel`

NewMembershipAwardPointsByHotelWithDefaults instantiates a new MembershipAwardPointsByHotel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipAwardPointsByHotel) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipAwardPointsByHotel) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipAwardPointsByHotel) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipAwardPointsByHotel) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipAwardPoints

`func (o *MembershipAwardPointsByHotel) GetMembershipAwardPoints() []MembershipAwardPointByHotelType`

GetMembershipAwardPoints returns the MembershipAwardPoints field if non-nil, zero value otherwise.

### GetMembershipAwardPointsOk

`func (o *MembershipAwardPointsByHotel) GetMembershipAwardPointsOk() (*[]MembershipAwardPointByHotelType, bool)`

GetMembershipAwardPointsOk returns a tuple with the MembershipAwardPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipAwardPoints

`func (o *MembershipAwardPointsByHotel) SetMembershipAwardPoints(v []MembershipAwardPointByHotelType)`

SetMembershipAwardPoints sets MembershipAwardPoints field to given value.

### HasMembershipAwardPoints

`func (o *MembershipAwardPointsByHotel) HasMembershipAwardPoints() bool`

HasMembershipAwardPoints returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipAwardPointsByHotel) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipAwardPointsByHotel) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipAwardPointsByHotel) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipAwardPointsByHotel) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

