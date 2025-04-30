# PreConfiguredRoutingInstrType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationProfile** | Pointer to [**ResAttachedProfileType**](ResAttachedProfileType.md) |  | [optional] 
**CompRoutingInstructionType** | Pointer to [**PromoCodeCompRoutingType**](PromoCodeCompRoutingType.md) |  | [optional] 
**AutoPopulateRouting** | Pointer to **string** | A flag which determines whether the Pre-configured Routing Instruction has to be automatically populated for this profile or not. | [optional] 
**TransactionCodes** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**BillingInstructions** | Pointer to [**[]BillingInstructionType**](BillingInstructionType.md) | Set of Billing Instruction codes. | [optional] 
**RatePlanCode** | Pointer to **string** | This is the actual rate code. This will be populated only for Pre-configured Routing Instructions for RateCodes. | [optional] 
**BeginDate** | Pointer to **string** | This is the Begin date for the Default Routing Instruction selected. | [optional] 
**EndDate** | Pointer to **string** | This is the End date for the Default Routing Instruction selected. | [optional] 

## Methods

### NewPreConfiguredRoutingInstrType

`func NewPreConfiguredRoutingInstrType() *PreConfiguredRoutingInstrType`

NewPreConfiguredRoutingInstrType instantiates a new PreConfiguredRoutingInstrType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreConfiguredRoutingInstrTypeWithDefaults

`func NewPreConfiguredRoutingInstrTypeWithDefaults() *PreConfiguredRoutingInstrType`

NewPreConfiguredRoutingInstrTypeWithDefaults instantiates a new PreConfiguredRoutingInstrType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationProfile

`func (o *PreConfiguredRoutingInstrType) GetReservationProfile() ResAttachedProfileType`

GetReservationProfile returns the ReservationProfile field if non-nil, zero value otherwise.

### GetReservationProfileOk

`func (o *PreConfiguredRoutingInstrType) GetReservationProfileOk() (*ResAttachedProfileType, bool)`

GetReservationProfileOk returns a tuple with the ReservationProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationProfile

`func (o *PreConfiguredRoutingInstrType) SetReservationProfile(v ResAttachedProfileType)`

SetReservationProfile sets ReservationProfile field to given value.

### HasReservationProfile

`func (o *PreConfiguredRoutingInstrType) HasReservationProfile() bool`

HasReservationProfile returns a boolean if a field has been set.

### GetCompRoutingInstructionType

`func (o *PreConfiguredRoutingInstrType) GetCompRoutingInstructionType() PromoCodeCompRoutingType`

GetCompRoutingInstructionType returns the CompRoutingInstructionType field if non-nil, zero value otherwise.

### GetCompRoutingInstructionTypeOk

`func (o *PreConfiguredRoutingInstrType) GetCompRoutingInstructionTypeOk() (*PromoCodeCompRoutingType, bool)`

GetCompRoutingInstructionTypeOk returns a tuple with the CompRoutingInstructionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRoutingInstructionType

`func (o *PreConfiguredRoutingInstrType) SetCompRoutingInstructionType(v PromoCodeCompRoutingType)`

SetCompRoutingInstructionType sets CompRoutingInstructionType field to given value.

### HasCompRoutingInstructionType

`func (o *PreConfiguredRoutingInstrType) HasCompRoutingInstructionType() bool`

HasCompRoutingInstructionType returns a boolean if a field has been set.

### GetAutoPopulateRouting

`func (o *PreConfiguredRoutingInstrType) GetAutoPopulateRouting() string`

GetAutoPopulateRouting returns the AutoPopulateRouting field if non-nil, zero value otherwise.

### GetAutoPopulateRoutingOk

`func (o *PreConfiguredRoutingInstrType) GetAutoPopulateRoutingOk() (*string, bool)`

GetAutoPopulateRoutingOk returns a tuple with the AutoPopulateRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoPopulateRouting

`func (o *PreConfiguredRoutingInstrType) SetAutoPopulateRouting(v string)`

SetAutoPopulateRouting sets AutoPopulateRouting field to given value.

### HasAutoPopulateRouting

`func (o *PreConfiguredRoutingInstrType) HasAutoPopulateRouting() bool`

HasAutoPopulateRouting returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *PreConfiguredRoutingInstrType) GetTransactionCodes() []TrxInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *PreConfiguredRoutingInstrType) GetTransactionCodesOk() (*[]TrxInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *PreConfiguredRoutingInstrType) SetTransactionCodes(v []TrxInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *PreConfiguredRoutingInstrType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetBillingInstructions

`func (o *PreConfiguredRoutingInstrType) GetBillingInstructions() []BillingInstructionType`

GetBillingInstructions returns the BillingInstructions field if non-nil, zero value otherwise.

### GetBillingInstructionsOk

`func (o *PreConfiguredRoutingInstrType) GetBillingInstructionsOk() (*[]BillingInstructionType, bool)`

GetBillingInstructionsOk returns a tuple with the BillingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingInstructions

`func (o *PreConfiguredRoutingInstrType) SetBillingInstructions(v []BillingInstructionType)`

SetBillingInstructions sets BillingInstructions field to given value.

### HasBillingInstructions

`func (o *PreConfiguredRoutingInstrType) HasBillingInstructions() bool`

HasBillingInstructions returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *PreConfiguredRoutingInstrType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *PreConfiguredRoutingInstrType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *PreConfiguredRoutingInstrType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *PreConfiguredRoutingInstrType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetBeginDate

`func (o *PreConfiguredRoutingInstrType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *PreConfiguredRoutingInstrType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *PreConfiguredRoutingInstrType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *PreConfiguredRoutingInstrType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *PreConfiguredRoutingInstrType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *PreConfiguredRoutingInstrType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *PreConfiguredRoutingInstrType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *PreConfiguredRoutingInstrType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


