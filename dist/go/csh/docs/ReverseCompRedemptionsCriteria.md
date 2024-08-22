# ReverseCompRedemptionsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**CompRedemptions** | Pointer to [**[]RedemptionType**](RedemptionType.md) | Information regarding Complimentary Bucket Redemption object. | [optional] 
**FolioView** | Pointer to **int32** | Folio Window. | [optional] 
**MembershipId** | Pointer to **string** | Membership number. | [optional] 

## Methods

### NewReverseCompRedemptionsCriteria

`func NewReverseCompRedemptionsCriteria() *ReverseCompRedemptionsCriteria`

NewReverseCompRedemptionsCriteria instantiates a new ReverseCompRedemptionsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReverseCompRedemptionsCriteriaWithDefaults

`func NewReverseCompRedemptionsCriteriaWithDefaults() *ReverseCompRedemptionsCriteria`

NewReverseCompRedemptionsCriteriaWithDefaults instantiates a new ReverseCompRedemptionsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *ReverseCompRedemptionsCriteria) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ReverseCompRedemptionsCriteria) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ReverseCompRedemptionsCriteria) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ReverseCompRedemptionsCriteria) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCompRedemptions

`func (o *ReverseCompRedemptionsCriteria) GetCompRedemptions() []RedemptionType`

GetCompRedemptions returns the CompRedemptions field if non-nil, zero value otherwise.

### GetCompRedemptionsOk

`func (o *ReverseCompRedemptionsCriteria) GetCompRedemptionsOk() (*[]RedemptionType, bool)`

GetCompRedemptionsOk returns a tuple with the CompRedemptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRedemptions

`func (o *ReverseCompRedemptionsCriteria) SetCompRedemptions(v []RedemptionType)`

SetCompRedemptions sets CompRedemptions field to given value.

### HasCompRedemptions

`func (o *ReverseCompRedemptionsCriteria) HasCompRedemptions() bool`

HasCompRedemptions returns a boolean if a field has been set.

### GetFolioView

`func (o *ReverseCompRedemptionsCriteria) GetFolioView() int32`

GetFolioView returns the FolioView field if non-nil, zero value otherwise.

### GetFolioViewOk

`func (o *ReverseCompRedemptionsCriteria) GetFolioViewOk() (*int32, bool)`

GetFolioViewOk returns a tuple with the FolioView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioView

`func (o *ReverseCompRedemptionsCriteria) SetFolioView(v int32)`

SetFolioView sets FolioView field to given value.

### HasFolioView

`func (o *ReverseCompRedemptionsCriteria) HasFolioView() bool`

HasFolioView returns a boolean if a field has been set.

### GetMembershipId

`func (o *ReverseCompRedemptionsCriteria) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *ReverseCompRedemptionsCriteria) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *ReverseCompRedemptionsCriteria) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *ReverseCompRedemptionsCriteria) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


