# BasedOnMembershipType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipType** | Pointer to **string** | The membership type that will be required for the element type (one that is based on Membership condition) to auto attach to the reservation. | [optional] 
**Level** | Pointer to **string** | The membership level of the selected membership type. | [optional] 

## Methods

### NewBasedOnMembershipType

`func NewBasedOnMembershipType() *BasedOnMembershipType`

NewBasedOnMembershipType instantiates a new BasedOnMembershipType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBasedOnMembershipTypeWithDefaults

`func NewBasedOnMembershipTypeWithDefaults() *BasedOnMembershipType`

NewBasedOnMembershipTypeWithDefaults instantiates a new BasedOnMembershipType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipType

`func (o *BasedOnMembershipType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *BasedOnMembershipType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *BasedOnMembershipType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *BasedOnMembershipType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetLevel

`func (o *BasedOnMembershipType) GetLevel() string`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *BasedOnMembershipType) GetLevelOk() (*string, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *BasedOnMembershipType) SetLevel(v string)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *BasedOnMembershipType) HasLevel() bool`

HasLevel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


