# MembershipSearchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociatedReservationsOnly** | Pointer to **bool** | If this is true,the reservations which has membership information associated will be resulted . | [optional] 
**MembershipId** | Pointer to **string** | Membership ID criteria. | [optional] 
**MembershipLevel** | Pointer to **[]string** |  | [optional] 
**MembershipType** | Pointer to **[]string** |  | [optional] 

## Methods

### NewMembershipSearchType

`func NewMembershipSearchType() *MembershipSearchType`

NewMembershipSearchType instantiates a new MembershipSearchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipSearchTypeWithDefaults

`func NewMembershipSearchTypeWithDefaults() *MembershipSearchType`

NewMembershipSearchTypeWithDefaults instantiates a new MembershipSearchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssociatedReservationsOnly

`func (o *MembershipSearchType) GetAssociatedReservationsOnly() bool`

GetAssociatedReservationsOnly returns the AssociatedReservationsOnly field if non-nil, zero value otherwise.

### GetAssociatedReservationsOnlyOk

`func (o *MembershipSearchType) GetAssociatedReservationsOnlyOk() (*bool, bool)`

GetAssociatedReservationsOnlyOk returns a tuple with the AssociatedReservationsOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedReservationsOnly

`func (o *MembershipSearchType) SetAssociatedReservationsOnly(v bool)`

SetAssociatedReservationsOnly sets AssociatedReservationsOnly field to given value.

### HasAssociatedReservationsOnly

`func (o *MembershipSearchType) HasAssociatedReservationsOnly() bool`

HasAssociatedReservationsOnly returns a boolean if a field has been set.

### GetMembershipId

`func (o *MembershipSearchType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *MembershipSearchType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *MembershipSearchType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *MembershipSearchType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *MembershipSearchType) GetMembershipLevel() []string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *MembershipSearchType) GetMembershipLevelOk() (*[]string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *MembershipSearchType) SetMembershipLevel(v []string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *MembershipSearchType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetMembershipType

`func (o *MembershipSearchType) GetMembershipType() []string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MembershipSearchType) GetMembershipTypeOk() (*[]string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MembershipSearchType) SetMembershipType(v []string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MembershipSearchType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


