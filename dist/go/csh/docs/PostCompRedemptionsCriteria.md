# PostCompRedemptionsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipId** | Pointer to **string** | Membership number. | [optional] 
**CompRedemptions** | Pointer to [**[]RedemptionType**](RedemptionType.md) | Information regarding Complimentary Bucket Redemption object. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**FolioView** | Pointer to **int32** | Folio Window. | [optional] 

## Methods

### NewPostCompRedemptionsCriteria

`func NewPostCompRedemptionsCriteria() *PostCompRedemptionsCriteria`

NewPostCompRedemptionsCriteria instantiates a new PostCompRedemptionsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCompRedemptionsCriteriaWithDefaults

`func NewPostCompRedemptionsCriteriaWithDefaults() *PostCompRedemptionsCriteria`

NewPostCompRedemptionsCriteriaWithDefaults instantiates a new PostCompRedemptionsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipId

`func (o *PostCompRedemptionsCriteria) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *PostCompRedemptionsCriteria) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *PostCompRedemptionsCriteria) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *PostCompRedemptionsCriteria) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetCompRedemptions

`func (o *PostCompRedemptionsCriteria) GetCompRedemptions() []RedemptionType`

GetCompRedemptions returns the CompRedemptions field if non-nil, zero value otherwise.

### GetCompRedemptionsOk

`func (o *PostCompRedemptionsCriteria) GetCompRedemptionsOk() (*[]RedemptionType, bool)`

GetCompRedemptionsOk returns a tuple with the CompRedemptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRedemptions

`func (o *PostCompRedemptionsCriteria) SetCompRedemptions(v []RedemptionType)`

SetCompRedemptions sets CompRedemptions field to given value.

### HasCompRedemptions

`func (o *PostCompRedemptionsCriteria) HasCompRedemptions() bool`

HasCompRedemptions returns a boolean if a field has been set.

### GetCashierId

`func (o *PostCompRedemptionsCriteria) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *PostCompRedemptionsCriteria) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *PostCompRedemptionsCriteria) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *PostCompRedemptionsCriteria) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetFolioView

`func (o *PostCompRedemptionsCriteria) GetFolioView() int32`

GetFolioView returns the FolioView field if non-nil, zero value otherwise.

### GetFolioViewOk

`func (o *PostCompRedemptionsCriteria) GetFolioViewOk() (*int32, bool)`

GetFolioViewOk returns a tuple with the FolioView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioView

`func (o *PostCompRedemptionsCriteria) SetFolioView(v int32)`

SetFolioView sets FolioView field to given value.

### HasFolioView

`func (o *PostCompRedemptionsCriteria) HasFolioView() bool`

HasFolioView returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


