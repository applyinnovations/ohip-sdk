# MembershipTransactionsSummaryCollection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipTransactionsSummaryCollection** | Pointer to [**[]MembershipTransactionsSummaryType**](MembershipTransactionsSummaryType.md) | A collection of membership points exceptions. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipTransactionsSummaryCollection

`func NewMembershipTransactionsSummaryCollection() *MembershipTransactionsSummaryCollection`

NewMembershipTransactionsSummaryCollection instantiates a new MembershipTransactionsSummaryCollection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTransactionsSummaryCollectionWithDefaults

`func NewMembershipTransactionsSummaryCollectionWithDefaults() *MembershipTransactionsSummaryCollection`

NewMembershipTransactionsSummaryCollectionWithDefaults instantiates a new MembershipTransactionsSummaryCollection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipTransactionsSummaryCollection

`func (o *MembershipTransactionsSummaryCollection) GetMembershipTransactionsSummaryCollection() []MembershipTransactionsSummaryType`

GetMembershipTransactionsSummaryCollection returns the MembershipTransactionsSummaryCollection field if non-nil, zero value otherwise.

### GetMembershipTransactionsSummaryCollectionOk

`func (o *MembershipTransactionsSummaryCollection) GetMembershipTransactionsSummaryCollectionOk() (*[]MembershipTransactionsSummaryType, bool)`

GetMembershipTransactionsSummaryCollectionOk returns a tuple with the MembershipTransactionsSummaryCollection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTransactionsSummaryCollection

`func (o *MembershipTransactionsSummaryCollection) SetMembershipTransactionsSummaryCollection(v []MembershipTransactionsSummaryType)`

SetMembershipTransactionsSummaryCollection sets MembershipTransactionsSummaryCollection field to given value.

### HasMembershipTransactionsSummaryCollection

`func (o *MembershipTransactionsSummaryCollection) HasMembershipTransactionsSummaryCollection() bool`

HasMembershipTransactionsSummaryCollection returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipTransactionsSummaryCollection) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipTransactionsSummaryCollection) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipTransactionsSummaryCollection) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipTransactionsSummaryCollection) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipTransactionsSummaryCollection) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipTransactionsSummaryCollection) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipTransactionsSummaryCollection) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipTransactionsSummaryCollection) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


