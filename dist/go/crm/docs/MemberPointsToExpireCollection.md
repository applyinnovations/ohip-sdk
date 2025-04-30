# MemberPointsToExpireCollection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MemberPointsToExpireCollection** | Pointer to [**[]MemberPointsToExpireCollectionType**](MemberPointsToExpireCollectionType.md) | List of of member points to expire. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMemberPointsToExpireCollection

`func NewMemberPointsToExpireCollection() *MemberPointsToExpireCollection`

NewMemberPointsToExpireCollection instantiates a new MemberPointsToExpireCollection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMemberPointsToExpireCollectionWithDefaults

`func NewMemberPointsToExpireCollectionWithDefaults() *MemberPointsToExpireCollection`

NewMemberPointsToExpireCollectionWithDefaults instantiates a new MemberPointsToExpireCollection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMemberPointsToExpireCollection

`func (o *MemberPointsToExpireCollection) GetMemberPointsToExpireCollection() []MemberPointsToExpireCollectionType`

GetMemberPointsToExpireCollection returns the MemberPointsToExpireCollection field if non-nil, zero value otherwise.

### GetMemberPointsToExpireCollectionOk

`func (o *MemberPointsToExpireCollection) GetMemberPointsToExpireCollectionOk() (*[]MemberPointsToExpireCollectionType, bool)`

GetMemberPointsToExpireCollectionOk returns a tuple with the MemberPointsToExpireCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberPointsToExpireCollection

`func (o *MemberPointsToExpireCollection) SetMemberPointsToExpireCollection(v []MemberPointsToExpireCollectionType)`

SetMemberPointsToExpireCollection sets MemberPointsToExpireCollection field to given value.

### HasMemberPointsToExpireCollection

`func (o *MemberPointsToExpireCollection) HasMemberPointsToExpireCollection() bool`

HasMemberPointsToExpireCollection returns a boolean if a field has been set.

### GetLinks

`func (o *MemberPointsToExpireCollection) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MemberPointsToExpireCollection) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MemberPointsToExpireCollection) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MemberPointsToExpireCollection) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MemberPointsToExpireCollection) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MemberPointsToExpireCollection) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MemberPointsToExpireCollection) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MemberPointsToExpireCollection) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


