# PromoCodeCompRoutingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipId** | Pointer to **string** | Membership number for promotion code complimentary routing | [optional] 
**Comments** | Pointer to **string** | User Defined Comments. Used for promotion code Complimentary Routing. | [optional] 
**AuthorizerInfo** | Pointer to [**AuthorizerInfoType**](AuthorizerInfoType.md) |  | [optional] 
**Duration** | Pointer to [**PromoCodeCompRoutingTypeDuration**](PromoCodeCompRoutingTypeDuration.md) |  | [optional] 
**CreditLimit** | Pointer to **float32** | Allowable credit amount for this promotion code complimentary routing instruction. Null value means no limit, 0 equals zero. | [optional] 
**PercentageLimit** | Pointer to **float32** | The promotion code complimentary routing limit percentage allowed for this routing instruction. | [optional] 
**Covers** | Pointer to **float32** | Number of covers for this promotion code complimentary routing instruction. | [optional] 
**PromotionCode** | Pointer to **string** | Promotion code for Complimentary Routing | [optional] 
**FolioNo** | Pointer to **int32** | The folio number where it is applied for promotion code complimentary routing. | [optional] 
**PromptForAuthorizer** | Pointer to **bool** | Flag to indicate to prompt the Authorizer for promotion code complimentary routing. | [optional] 
**CompPreApprovalRequired** | Pointer to **bool** | Flag to indicate that pre approval is required for promotion code complimentary routing . | [optional] 

## Methods

### NewPromoCodeCompRoutingType

`func NewPromoCodeCompRoutingType() *PromoCodeCompRoutingType`

NewPromoCodeCompRoutingType instantiates a new PromoCodeCompRoutingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromoCodeCompRoutingTypeWithDefaults

`func NewPromoCodeCompRoutingTypeWithDefaults() *PromoCodeCompRoutingType`

NewPromoCodeCompRoutingTypeWithDefaults instantiates a new PromoCodeCompRoutingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipId

`func (o *PromoCodeCompRoutingType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *PromoCodeCompRoutingType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *PromoCodeCompRoutingType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *PromoCodeCompRoutingType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetComments

`func (o *PromoCodeCompRoutingType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *PromoCodeCompRoutingType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *PromoCodeCompRoutingType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *PromoCodeCompRoutingType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetAuthorizerInfo

`func (o *PromoCodeCompRoutingType) GetAuthorizerInfo() AuthorizerInfoType`

GetAuthorizerInfo returns the AuthorizerInfo field if non-nil, zero value otherwise.

### GetAuthorizerInfoOk

`func (o *PromoCodeCompRoutingType) GetAuthorizerInfoOk() (*AuthorizerInfoType, bool)`

GetAuthorizerInfoOk returns a tuple with the AuthorizerInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerInfo

`func (o *PromoCodeCompRoutingType) SetAuthorizerInfo(v AuthorizerInfoType)`

SetAuthorizerInfo sets AuthorizerInfo field to given value.

### HasAuthorizerInfo

`func (o *PromoCodeCompRoutingType) HasAuthorizerInfo() bool`

HasAuthorizerInfo returns a boolean if a field has been set.

### GetDuration

`func (o *PromoCodeCompRoutingType) GetDuration() PromoCodeCompRoutingTypeDuration`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *PromoCodeCompRoutingType) GetDurationOk() (*PromoCodeCompRoutingTypeDuration, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *PromoCodeCompRoutingType) SetDuration(v PromoCodeCompRoutingTypeDuration)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *PromoCodeCompRoutingType) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetCreditLimit

`func (o *PromoCodeCompRoutingType) GetCreditLimit() float32`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *PromoCodeCompRoutingType) GetCreditLimitOk() (*float32, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *PromoCodeCompRoutingType) SetCreditLimit(v float32)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *PromoCodeCompRoutingType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetPercentageLimit

`func (o *PromoCodeCompRoutingType) GetPercentageLimit() float32`

GetPercentageLimit returns the PercentageLimit field if non-nil, zero value otherwise.

### GetPercentageLimitOk

`func (o *PromoCodeCompRoutingType) GetPercentageLimitOk() (*float32, bool)`

GetPercentageLimitOk returns a tuple with the PercentageLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageLimit

`func (o *PromoCodeCompRoutingType) SetPercentageLimit(v float32)`

SetPercentageLimit sets PercentageLimit field to given value.

### HasPercentageLimit

`func (o *PromoCodeCompRoutingType) HasPercentageLimit() bool`

HasPercentageLimit returns a boolean if a field has been set.

### GetCovers

`func (o *PromoCodeCompRoutingType) GetCovers() float32`

GetCovers returns the Covers field if non-nil, zero value otherwise.

### GetCoversOk

`func (o *PromoCodeCompRoutingType) GetCoversOk() (*float32, bool)`

GetCoversOk returns a tuple with the Covers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCovers

`func (o *PromoCodeCompRoutingType) SetCovers(v float32)`

SetCovers sets Covers field to given value.

### HasCovers

`func (o *PromoCodeCompRoutingType) HasCovers() bool`

HasCovers returns a boolean if a field has been set.

### GetPromotionCode

`func (o *PromoCodeCompRoutingType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *PromoCodeCompRoutingType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *PromoCodeCompRoutingType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *PromoCodeCompRoutingType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetFolioNo

`func (o *PromoCodeCompRoutingType) GetFolioNo() int32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *PromoCodeCompRoutingType) GetFolioNoOk() (*int32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *PromoCodeCompRoutingType) SetFolioNo(v int32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *PromoCodeCompRoutingType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetPromptForAuthorizer

`func (o *PromoCodeCompRoutingType) GetPromptForAuthorizer() bool`

GetPromptForAuthorizer returns the PromptForAuthorizer field if non-nil, zero value otherwise.

### GetPromptForAuthorizerOk

`func (o *PromoCodeCompRoutingType) GetPromptForAuthorizerOk() (*bool, bool)`

GetPromptForAuthorizerOk returns a tuple with the PromptForAuthorizer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromptForAuthorizer

`func (o *PromoCodeCompRoutingType) SetPromptForAuthorizer(v bool)`

SetPromptForAuthorizer sets PromptForAuthorizer field to given value.

### HasPromptForAuthorizer

`func (o *PromoCodeCompRoutingType) HasPromptForAuthorizer() bool`

HasPromptForAuthorizer returns a boolean if a field has been set.

### GetCompPreApprovalRequired

`func (o *PromoCodeCompRoutingType) GetCompPreApprovalRequired() bool`

GetCompPreApprovalRequired returns the CompPreApprovalRequired field if non-nil, zero value otherwise.

### GetCompPreApprovalRequiredOk

`func (o *PromoCodeCompRoutingType) GetCompPreApprovalRequiredOk() (*bool, bool)`

GetCompPreApprovalRequiredOk returns a tuple with the CompPreApprovalRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompPreApprovalRequired

`func (o *PromoCodeCompRoutingType) SetCompPreApprovalRequired(v bool)`

SetCompPreApprovalRequired sets CompPreApprovalRequired field to given value.

### HasCompPreApprovalRequired

`func (o *PromoCodeCompRoutingType) HasCompPreApprovalRequired() bool`

HasCompPreApprovalRequired returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


