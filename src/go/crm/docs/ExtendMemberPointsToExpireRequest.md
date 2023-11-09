# ExtendMemberPointsToExpireRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExpirationDate** | Pointer to **string** | Expiration date to be extended. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MembershipId** | Pointer to **float32** | Unique Membership ID. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewExtendMemberPointsToExpireRequest

`func NewExtendMemberPointsToExpireRequest() *ExtendMemberPointsToExpireRequest`

NewExtendMemberPointsToExpireRequest instantiates a new ExtendMemberPointsToExpireRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExtendMemberPointsToExpireRequestWithDefaults

`func NewExtendMemberPointsToExpireRequestWithDefaults() *ExtendMemberPointsToExpireRequest`

NewExtendMemberPointsToExpireRequestWithDefaults instantiates a new ExtendMemberPointsToExpireRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpirationDate

`func (o *ExtendMemberPointsToExpireRequest) GetExpirationDate() string`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *ExtendMemberPointsToExpireRequest) GetExpirationDateOk() (*string, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *ExtendMemberPointsToExpireRequest) SetExpirationDate(v string)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *ExtendMemberPointsToExpireRequest) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### GetLinks

`func (o *ExtendMemberPointsToExpireRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExtendMemberPointsToExpireRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExtendMemberPointsToExpireRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExtendMemberPointsToExpireRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipId

`func (o *ExtendMemberPointsToExpireRequest) GetMembershipId() float32`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *ExtendMemberPointsToExpireRequest) GetMembershipIdOk() (*float32, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *ExtendMemberPointsToExpireRequest) SetMembershipId(v float32)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *ExtendMemberPointsToExpireRequest) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetWarnings

`func (o *ExtendMemberPointsToExpireRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExtendMemberPointsToExpireRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExtendMemberPointsToExpireRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExtendMemberPointsToExpireRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


