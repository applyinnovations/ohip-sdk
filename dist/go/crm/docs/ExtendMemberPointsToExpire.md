# ExtendMemberPointsToExpire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipId** | Pointer to **float32** | Unique Membership ID. | [optional] 
**ExpirationDate** | Pointer to **string** | Expiration date to be extended. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewExtendMemberPointsToExpire

`func NewExtendMemberPointsToExpire() *ExtendMemberPointsToExpire`

NewExtendMemberPointsToExpire instantiates a new ExtendMemberPointsToExpire object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExtendMemberPointsToExpireWithDefaults

`func NewExtendMemberPointsToExpireWithDefaults() *ExtendMemberPointsToExpire`

NewExtendMemberPointsToExpireWithDefaults instantiates a new ExtendMemberPointsToExpire object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipId

`func (o *ExtendMemberPointsToExpire) GetMembershipId() float32`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *ExtendMemberPointsToExpire) GetMembershipIdOk() (*float32, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *ExtendMemberPointsToExpire) SetMembershipId(v float32)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *ExtendMemberPointsToExpire) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetExpirationDate

`func (o *ExtendMemberPointsToExpire) GetExpirationDate() string`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *ExtendMemberPointsToExpire) GetExpirationDateOk() (*string, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *ExtendMemberPointsToExpire) SetExpirationDate(v string)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *ExtendMemberPointsToExpire) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### GetLinks

`func (o *ExtendMemberPointsToExpire) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExtendMemberPointsToExpire) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExtendMemberPointsToExpire) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExtendMemberPointsToExpire) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExtendMemberPointsToExpire) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExtendMemberPointsToExpire) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExtendMemberPointsToExpire) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExtendMemberPointsToExpire) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


