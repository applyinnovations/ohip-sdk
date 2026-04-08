# MembershipPromotionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipPromotion** | Pointer to [**MembershipPromotionType**](MembershipPromotionType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipPromotionDetails

`func NewMembershipPromotionDetails() *MembershipPromotionDetails`

NewMembershipPromotionDetails instantiates a new MembershipPromotionDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipPromotionDetailsWithDefaults

`func NewMembershipPromotionDetailsWithDefaults() *MembershipPromotionDetails`

NewMembershipPromotionDetailsWithDefaults instantiates a new MembershipPromotionDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipPromotion

`func (o *MembershipPromotionDetails) GetMembershipPromotion() MembershipPromotionType`

GetMembershipPromotion returns the MembershipPromotion field if non-nil, zero value otherwise.

### GetMembershipPromotionOk

`func (o *MembershipPromotionDetails) GetMembershipPromotionOk() (*MembershipPromotionType, bool)`

GetMembershipPromotionOk returns a tuple with the MembershipPromotion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipPromotion

`func (o *MembershipPromotionDetails) SetMembershipPromotion(v MembershipPromotionType)`

SetMembershipPromotion sets MembershipPromotion field to given value.

### HasMembershipPromotion

`func (o *MembershipPromotionDetails) HasMembershipPromotion() bool`

HasMembershipPromotion returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipPromotionDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipPromotionDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipPromotionDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipPromotionDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipPromotionDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipPromotionDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipPromotionDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipPromotionDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


