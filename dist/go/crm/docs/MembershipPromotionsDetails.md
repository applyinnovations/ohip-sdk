# MembershipPromotionsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipPromotions** | Pointer to [**[]MembershipPromotionType**](MembershipPromotionType.md) | Collection of membership promotions. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipPromotionsDetails

`func NewMembershipPromotionsDetails() *MembershipPromotionsDetails`

NewMembershipPromotionsDetails instantiates a new MembershipPromotionsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipPromotionsDetailsWithDefaults

`func NewMembershipPromotionsDetailsWithDefaults() *MembershipPromotionsDetails`

NewMembershipPromotionsDetailsWithDefaults instantiates a new MembershipPromotionsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipPromotions

`func (o *MembershipPromotionsDetails) GetMembershipPromotions() []MembershipPromotionType`

GetMembershipPromotions returns the MembershipPromotions field if non-nil, zero value otherwise.

### GetMembershipPromotionsOk

`func (o *MembershipPromotionsDetails) GetMembershipPromotionsOk() (*[]MembershipPromotionType, bool)`

GetMembershipPromotionsOk returns a tuple with the MembershipPromotions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipPromotions

`func (o *MembershipPromotionsDetails) SetMembershipPromotions(v []MembershipPromotionType)`

SetMembershipPromotions sets MembershipPromotions field to given value.

### HasMembershipPromotions

`func (o *MembershipPromotionsDetails) HasMembershipPromotions() bool`

HasMembershipPromotions returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipPromotionsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipPromotionsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipPromotionsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipPromotionsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipPromotionsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipPromotionsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipPromotionsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipPromotionsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


