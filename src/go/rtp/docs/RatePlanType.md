# RatePlanType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessExclusions** | Pointer to [**[]RateAccessExclusionType**](RateAccessExclusionType.md) | List of access exclusions. | [optional] 
**AdvancedDailyBase** | Pointer to **bool** | Flag to identify if Rate Code is Advanced Daily Base Rate Code | [optional] 
**AdvancedDailyRate** | Pointer to **bool** | Flag to identify if Rate Code is Advanced Daily Rate | [optional] 
**ApprovalNotes** | Pointer to [**RatePlanNotesType**](RatePlanNotesType.md) |  | [optional] 
**BARRate** | Pointer to **bool** | Is rate plan code of BAR Rate type? | [optional] 
**Classifications** | Pointer to [**RatePlanClassificationsType**](RatePlanClassificationsType.md) |  | [optional] 
**Complimentary** | Pointer to **bool** | Is rate plan code complimentary? | [optional] 
**Controls** | Pointer to [**RatePlanControlsType**](RatePlanControlsType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**Daily** | Pointer to **bool** | Is rate plan code a daily rate? | [optional] 
**DayType** | Pointer to **bool** | Indicates if rate Calendar factors such as adder/multiplier should be used for price calculation. | [optional] 
**DayUse** | Pointer to **bool** | Is rate plan code for day use? | [optional] 
**Descriptions** | Pointer to [**RatePlanDescriptionsType**](RatePlanDescriptionsType.md) |  | [optional] 
**DiscountAllowed** | Pointer to **bool** | Is rate plan code discounted? | [optional] 
**Distribution** | Pointer to [**RatePlanDistributionType**](RatePlanDistributionType.md) |  | [optional] 
**ExternalAttributes** | Pointer to [**RatePlanExternalAttributesType**](RatePlanExternalAttributesType.md) |  | [optional] 
**ExternallyControlled** | Pointer to **bool** | Is rate plan code externally controlled? | [optional] 
**FloorAmount** | Pointer to **float32** | An amount that act as Floor value for Rate Plan. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code | [optional] 
**HouseUse** | Pointer to **bool** | Is rate plan code for house use? | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**MembershipEligible** | Pointer to **bool** | Is rate plan code flagged as eligible for memberships? This flag controls whether the guest stay, which this rate plan is attached to, qualifies for point calculations for Frequent Flyer or Frequent Guest programs. If the rate plan associated to the reservation has not been flagged for Membership then the guest will not earn any points/miles for their stay. | [optional] 
**MobileCheckinAllowed** | Pointer to **bool** | This is a placeholder element for future use. Functionality may not be available for the current implementation. | [optional] 
**MobileCheckoutAllowed** | Pointer to **bool** | This is a placeholder element for future use. Functionality may not be available for the current implementation. | [optional] 
**Negotiated** | Pointer to **bool** | Is rate plan code only available as a negotiated rate that must be associated with a guest, company, or travel agent profile ? | [optional] 
**NegotiatedRates** | Pointer to [**RatePlanTypeNegotiatedRates**](RatePlanTypeNegotiatedRates.md) |  | [optional] 
**OwnerRate** | Pointer to **bool** | Is rate plan code flagged as an owner rate plan? Owner rate plans have special functionality for no-shows depending on the Rolling Noshow Preference application setting. | [optional] 
**PrimaryDetails** | Pointer to [**RatePlanPrimaryDetailsType**](RatePlanPrimaryDetailsType.md) |  | [optional] 
**PrintRate** | Pointer to **bool** | Is Rate amount printed on the reports for the rate plan? | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**RateCommission** | Pointer to [**RatePlanCommissionType**](RatePlanCommissionType.md) |  | [optional] 
**RateDeposit** | Pointer to [**RatePlanDepositType**](RatePlanDepositType.md) |  | [optional] 
**RatePackages** | Pointer to [**RatePackagesType**](RatePackagesType.md) |  | [optional] 
**RatePlanBasedOnRates** | Pointer to [**RatePlanBasedOnRatesType**](RatePlanBasedOnRatesType.md) |  | [optional] 
**RatePlanCode** | Pointer to **string** | Rate plan Code | [optional] 
**RatePlanCodeIndicators** | Pointer to [**IndicatorsType**](IndicatorsType.md) |  | [optional] 
**RatePlanScheduleInfo** | Pointer to [**RatePlanScheduleInfoType**](RatePlanScheduleInfoType.md) |  | [optional] 
**Redemption** | Pointer to **bool** | Is redemption allowed on the rate code? | [optional] 
**RoomTypeList** | Pointer to [**RateRoomTypeListType**](RateRoomTypeListType.md) |  | [optional] 
**RoutingInstructions** | Pointer to [**RatePlanRoutingInstructionsType**](RatePlanRoutingInstructionsType.md) |  | [optional] 
**SupressRate** | Pointer to **bool** | Is rate amount suppressed for the rate plan? | [optional] 
**Tiered** | Pointer to **bool** | Is rate plan code a tiered rate? | [optional] 
**TransactionDetails** | Pointer to [**RatePlanTransactionDetailsType**](RatePlanTransactionDetailsType.md) |  | [optional] 

## Methods

### NewRatePlanType

`func NewRatePlanType() *RatePlanType`

NewRatePlanType instantiates a new RatePlanType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanTypeWithDefaults

`func NewRatePlanTypeWithDefaults() *RatePlanType`

NewRatePlanTypeWithDefaults instantiates a new RatePlanType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessExclusions

`func (o *RatePlanType) GetAccessExclusions() []RateAccessExclusionType`

GetAccessExclusions returns the AccessExclusions field if non-nil, zero value otherwise.

### GetAccessExclusionsOk

`func (o *RatePlanType) GetAccessExclusionsOk() (*[]RateAccessExclusionType, bool)`

GetAccessExclusionsOk returns a tuple with the AccessExclusions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessExclusions

`func (o *RatePlanType) SetAccessExclusions(v []RateAccessExclusionType)`

SetAccessExclusions sets AccessExclusions field to given value.

### HasAccessExclusions

`func (o *RatePlanType) HasAccessExclusions() bool`

HasAccessExclusions returns a boolean if a field has been set.

### GetAdvancedDailyBase

`func (o *RatePlanType) GetAdvancedDailyBase() bool`

GetAdvancedDailyBase returns the AdvancedDailyBase field if non-nil, zero value otherwise.

### GetAdvancedDailyBaseOk

`func (o *RatePlanType) GetAdvancedDailyBaseOk() (*bool, bool)`

GetAdvancedDailyBaseOk returns a tuple with the AdvancedDailyBase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedDailyBase

`func (o *RatePlanType) SetAdvancedDailyBase(v bool)`

SetAdvancedDailyBase sets AdvancedDailyBase field to given value.

### HasAdvancedDailyBase

`func (o *RatePlanType) HasAdvancedDailyBase() bool`

HasAdvancedDailyBase returns a boolean if a field has been set.

### GetAdvancedDailyRate

`func (o *RatePlanType) GetAdvancedDailyRate() bool`

GetAdvancedDailyRate returns the AdvancedDailyRate field if non-nil, zero value otherwise.

### GetAdvancedDailyRateOk

`func (o *RatePlanType) GetAdvancedDailyRateOk() (*bool, bool)`

GetAdvancedDailyRateOk returns a tuple with the AdvancedDailyRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedDailyRate

`func (o *RatePlanType) SetAdvancedDailyRate(v bool)`

SetAdvancedDailyRate sets AdvancedDailyRate field to given value.

### HasAdvancedDailyRate

`func (o *RatePlanType) HasAdvancedDailyRate() bool`

HasAdvancedDailyRate returns a boolean if a field has been set.

### GetApprovalNotes

`func (o *RatePlanType) GetApprovalNotes() RatePlanNotesType`

GetApprovalNotes returns the ApprovalNotes field if non-nil, zero value otherwise.

### GetApprovalNotesOk

`func (o *RatePlanType) GetApprovalNotesOk() (*RatePlanNotesType, bool)`

GetApprovalNotesOk returns a tuple with the ApprovalNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalNotes

`func (o *RatePlanType) SetApprovalNotes(v RatePlanNotesType)`

SetApprovalNotes sets ApprovalNotes field to given value.

### HasApprovalNotes

`func (o *RatePlanType) HasApprovalNotes() bool`

HasApprovalNotes returns a boolean if a field has been set.

### GetBARRate

`func (o *RatePlanType) GetBARRate() bool`

GetBARRate returns the BARRate field if non-nil, zero value otherwise.

### GetBARRateOk

`func (o *RatePlanType) GetBARRateOk() (*bool, bool)`

GetBARRateOk returns a tuple with the BARRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBARRate

`func (o *RatePlanType) SetBARRate(v bool)`

SetBARRate sets BARRate field to given value.

### HasBARRate

`func (o *RatePlanType) HasBARRate() bool`

HasBARRate returns a boolean if a field has been set.

### GetClassifications

`func (o *RatePlanType) GetClassifications() RatePlanClassificationsType`

GetClassifications returns the Classifications field if non-nil, zero value otherwise.

### GetClassificationsOk

`func (o *RatePlanType) GetClassificationsOk() (*RatePlanClassificationsType, bool)`

GetClassificationsOk returns a tuple with the Classifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassifications

`func (o *RatePlanType) SetClassifications(v RatePlanClassificationsType)`

SetClassifications sets Classifications field to given value.

### HasClassifications

`func (o *RatePlanType) HasClassifications() bool`

HasClassifications returns a boolean if a field has been set.

### GetComplimentary

`func (o *RatePlanType) GetComplimentary() bool`

GetComplimentary returns the Complimentary field if non-nil, zero value otherwise.

### GetComplimentaryOk

`func (o *RatePlanType) GetComplimentaryOk() (*bool, bool)`

GetComplimentaryOk returns a tuple with the Complimentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplimentary

`func (o *RatePlanType) SetComplimentary(v bool)`

SetComplimentary sets Complimentary field to given value.

### HasComplimentary

`func (o *RatePlanType) HasComplimentary() bool`

HasComplimentary returns a boolean if a field has been set.

### GetControls

`func (o *RatePlanType) GetControls() RatePlanControlsType`

GetControls returns the Controls field if non-nil, zero value otherwise.

### GetControlsOk

`func (o *RatePlanType) GetControlsOk() (*RatePlanControlsType, bool)`

GetControlsOk returns a tuple with the Controls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControls

`func (o *RatePlanType) SetControls(v RatePlanControlsType)`

SetControls sets Controls field to given value.

### HasControls

`func (o *RatePlanType) HasControls() bool`

HasControls returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *RatePlanType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *RatePlanType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *RatePlanType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *RatePlanType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *RatePlanType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *RatePlanType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *RatePlanType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *RatePlanType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetDaily

`func (o *RatePlanType) GetDaily() bool`

GetDaily returns the Daily field if non-nil, zero value otherwise.

### GetDailyOk

`func (o *RatePlanType) GetDailyOk() (*bool, bool)`

GetDailyOk returns a tuple with the Daily field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaily

`func (o *RatePlanType) SetDaily(v bool)`

SetDaily sets Daily field to given value.

### HasDaily

`func (o *RatePlanType) HasDaily() bool`

HasDaily returns a boolean if a field has been set.

### GetDayType

`func (o *RatePlanType) GetDayType() bool`

GetDayType returns the DayType field if non-nil, zero value otherwise.

### GetDayTypeOk

`func (o *RatePlanType) GetDayTypeOk() (*bool, bool)`

GetDayTypeOk returns a tuple with the DayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayType

`func (o *RatePlanType) SetDayType(v bool)`

SetDayType sets DayType field to given value.

### HasDayType

`func (o *RatePlanType) HasDayType() bool`

HasDayType returns a boolean if a field has been set.

### GetDayUse

`func (o *RatePlanType) GetDayUse() bool`

GetDayUse returns the DayUse field if non-nil, zero value otherwise.

### GetDayUseOk

`func (o *RatePlanType) GetDayUseOk() (*bool, bool)`

GetDayUseOk returns a tuple with the DayUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayUse

`func (o *RatePlanType) SetDayUse(v bool)`

SetDayUse sets DayUse field to given value.

### HasDayUse

`func (o *RatePlanType) HasDayUse() bool`

HasDayUse returns a boolean if a field has been set.

### GetDescriptions

`func (o *RatePlanType) GetDescriptions() RatePlanDescriptionsType`

GetDescriptions returns the Descriptions field if non-nil, zero value otherwise.

### GetDescriptionsOk

`func (o *RatePlanType) GetDescriptionsOk() (*RatePlanDescriptionsType, bool)`

GetDescriptionsOk returns a tuple with the Descriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescriptions

`func (o *RatePlanType) SetDescriptions(v RatePlanDescriptionsType)`

SetDescriptions sets Descriptions field to given value.

### HasDescriptions

`func (o *RatePlanType) HasDescriptions() bool`

HasDescriptions returns a boolean if a field has been set.

### GetDiscountAllowed

`func (o *RatePlanType) GetDiscountAllowed() bool`

GetDiscountAllowed returns the DiscountAllowed field if non-nil, zero value otherwise.

### GetDiscountAllowedOk

`func (o *RatePlanType) GetDiscountAllowedOk() (*bool, bool)`

GetDiscountAllowedOk returns a tuple with the DiscountAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountAllowed

`func (o *RatePlanType) SetDiscountAllowed(v bool)`

SetDiscountAllowed sets DiscountAllowed field to given value.

### HasDiscountAllowed

`func (o *RatePlanType) HasDiscountAllowed() bool`

HasDiscountAllowed returns a boolean if a field has been set.

### GetDistribution

`func (o *RatePlanType) GetDistribution() RatePlanDistributionType`

GetDistribution returns the Distribution field if non-nil, zero value otherwise.

### GetDistributionOk

`func (o *RatePlanType) GetDistributionOk() (*RatePlanDistributionType, bool)`

GetDistributionOk returns a tuple with the Distribution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistribution

`func (o *RatePlanType) SetDistribution(v RatePlanDistributionType)`

SetDistribution sets Distribution field to given value.

### HasDistribution

`func (o *RatePlanType) HasDistribution() bool`

HasDistribution returns a boolean if a field has been set.

### GetExternalAttributes

`func (o *RatePlanType) GetExternalAttributes() RatePlanExternalAttributesType`

GetExternalAttributes returns the ExternalAttributes field if non-nil, zero value otherwise.

### GetExternalAttributesOk

`func (o *RatePlanType) GetExternalAttributesOk() (*RatePlanExternalAttributesType, bool)`

GetExternalAttributesOk returns a tuple with the ExternalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalAttributes

`func (o *RatePlanType) SetExternalAttributes(v RatePlanExternalAttributesType)`

SetExternalAttributes sets ExternalAttributes field to given value.

### HasExternalAttributes

`func (o *RatePlanType) HasExternalAttributes() bool`

HasExternalAttributes returns a boolean if a field has been set.

### GetExternallyControlled

`func (o *RatePlanType) GetExternallyControlled() bool`

GetExternallyControlled returns the ExternallyControlled field if non-nil, zero value otherwise.

### GetExternallyControlledOk

`func (o *RatePlanType) GetExternallyControlledOk() (*bool, bool)`

GetExternallyControlledOk returns a tuple with the ExternallyControlled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternallyControlled

`func (o *RatePlanType) SetExternallyControlled(v bool)`

SetExternallyControlled sets ExternallyControlled field to given value.

### HasExternallyControlled

`func (o *RatePlanType) HasExternallyControlled() bool`

HasExternallyControlled returns a boolean if a field has been set.

### GetFloorAmount

`func (o *RatePlanType) GetFloorAmount() float32`

GetFloorAmount returns the FloorAmount field if non-nil, zero value otherwise.

### GetFloorAmountOk

`func (o *RatePlanType) GetFloorAmountOk() (*float32, bool)`

GetFloorAmountOk returns a tuple with the FloorAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorAmount

`func (o *RatePlanType) SetFloorAmount(v float32)`

SetFloorAmount sets FloorAmount field to given value.

### HasFloorAmount

`func (o *RatePlanType) HasFloorAmount() bool`

HasFloorAmount returns a boolean if a field has been set.

### GetHotelId

`func (o *RatePlanType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RatePlanType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RatePlanType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RatePlanType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHouseUse

`func (o *RatePlanType) GetHouseUse() bool`

GetHouseUse returns the HouseUse field if non-nil, zero value otherwise.

### GetHouseUseOk

`func (o *RatePlanType) GetHouseUseOk() (*bool, bool)`

GetHouseUseOk returns a tuple with the HouseUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouseUse

`func (o *RatePlanType) SetHouseUse(v bool)`

SetHouseUse sets HouseUse field to given value.

### HasHouseUse

`func (o *RatePlanType) HasHouseUse() bool`

HasHouseUse returns a boolean if a field has been set.

### GetLastModifierId

`func (o *RatePlanType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *RatePlanType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *RatePlanType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *RatePlanType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *RatePlanType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *RatePlanType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *RatePlanType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *RatePlanType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetMembershipEligible

`func (o *RatePlanType) GetMembershipEligible() bool`

GetMembershipEligible returns the MembershipEligible field if non-nil, zero value otherwise.

### GetMembershipEligibleOk

`func (o *RatePlanType) GetMembershipEligibleOk() (*bool, bool)`

GetMembershipEligibleOk returns a tuple with the MembershipEligible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEligible

`func (o *RatePlanType) SetMembershipEligible(v bool)`

SetMembershipEligible sets MembershipEligible field to given value.

### HasMembershipEligible

`func (o *RatePlanType) HasMembershipEligible() bool`

HasMembershipEligible returns a boolean if a field has been set.

### GetMobileCheckinAllowed

`func (o *RatePlanType) GetMobileCheckinAllowed() bool`

GetMobileCheckinAllowed returns the MobileCheckinAllowed field if non-nil, zero value otherwise.

### GetMobileCheckinAllowedOk

`func (o *RatePlanType) GetMobileCheckinAllowedOk() (*bool, bool)`

GetMobileCheckinAllowedOk returns a tuple with the MobileCheckinAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileCheckinAllowed

`func (o *RatePlanType) SetMobileCheckinAllowed(v bool)`

SetMobileCheckinAllowed sets MobileCheckinAllowed field to given value.

### HasMobileCheckinAllowed

`func (o *RatePlanType) HasMobileCheckinAllowed() bool`

HasMobileCheckinAllowed returns a boolean if a field has been set.

### GetMobileCheckoutAllowed

`func (o *RatePlanType) GetMobileCheckoutAllowed() bool`

GetMobileCheckoutAllowed returns the MobileCheckoutAllowed field if non-nil, zero value otherwise.

### GetMobileCheckoutAllowedOk

`func (o *RatePlanType) GetMobileCheckoutAllowedOk() (*bool, bool)`

GetMobileCheckoutAllowedOk returns a tuple with the MobileCheckoutAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileCheckoutAllowed

`func (o *RatePlanType) SetMobileCheckoutAllowed(v bool)`

SetMobileCheckoutAllowed sets MobileCheckoutAllowed field to given value.

### HasMobileCheckoutAllowed

`func (o *RatePlanType) HasMobileCheckoutAllowed() bool`

HasMobileCheckoutAllowed returns a boolean if a field has been set.

### GetNegotiated

`func (o *RatePlanType) GetNegotiated() bool`

GetNegotiated returns the Negotiated field if non-nil, zero value otherwise.

### GetNegotiatedOk

`func (o *RatePlanType) GetNegotiatedOk() (*bool, bool)`

GetNegotiatedOk returns a tuple with the Negotiated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiated

`func (o *RatePlanType) SetNegotiated(v bool)`

SetNegotiated sets Negotiated field to given value.

### HasNegotiated

`func (o *RatePlanType) HasNegotiated() bool`

HasNegotiated returns a boolean if a field has been set.

### GetNegotiatedRates

`func (o *RatePlanType) GetNegotiatedRates() RatePlanTypeNegotiatedRates`

GetNegotiatedRates returns the NegotiatedRates field if non-nil, zero value otherwise.

### GetNegotiatedRatesOk

`func (o *RatePlanType) GetNegotiatedRatesOk() (*RatePlanTypeNegotiatedRates, bool)`

GetNegotiatedRatesOk returns a tuple with the NegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedRates

`func (o *RatePlanType) SetNegotiatedRates(v RatePlanTypeNegotiatedRates)`

SetNegotiatedRates sets NegotiatedRates field to given value.

### HasNegotiatedRates

`func (o *RatePlanType) HasNegotiatedRates() bool`

HasNegotiatedRates returns a boolean if a field has been set.

### GetOwnerRate

`func (o *RatePlanType) GetOwnerRate() bool`

GetOwnerRate returns the OwnerRate field if non-nil, zero value otherwise.

### GetOwnerRateOk

`func (o *RatePlanType) GetOwnerRateOk() (*bool, bool)`

GetOwnerRateOk returns a tuple with the OwnerRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRate

`func (o *RatePlanType) SetOwnerRate(v bool)`

SetOwnerRate sets OwnerRate field to given value.

### HasOwnerRate

`func (o *RatePlanType) HasOwnerRate() bool`

HasOwnerRate returns a boolean if a field has been set.

### GetPrimaryDetails

`func (o *RatePlanType) GetPrimaryDetails() RatePlanPrimaryDetailsType`

GetPrimaryDetails returns the PrimaryDetails field if non-nil, zero value otherwise.

### GetPrimaryDetailsOk

`func (o *RatePlanType) GetPrimaryDetailsOk() (*RatePlanPrimaryDetailsType, bool)`

GetPrimaryDetailsOk returns a tuple with the PrimaryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryDetails

`func (o *RatePlanType) SetPrimaryDetails(v RatePlanPrimaryDetailsType)`

SetPrimaryDetails sets PrimaryDetails field to given value.

### HasPrimaryDetails

`func (o *RatePlanType) HasPrimaryDetails() bool`

HasPrimaryDetails returns a boolean if a field has been set.

### GetPrintRate

`func (o *RatePlanType) GetPrintRate() bool`

GetPrintRate returns the PrintRate field if non-nil, zero value otherwise.

### GetPrintRateOk

`func (o *RatePlanType) GetPrintRateOk() (*bool, bool)`

GetPrintRateOk returns a tuple with the PrintRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintRate

`func (o *RatePlanType) SetPrintRate(v bool)`

SetPrintRate sets PrintRate field to given value.

### HasPrintRate

`func (o *RatePlanType) HasPrintRate() bool`

HasPrintRate returns a boolean if a field has been set.

### GetPurgeDate

`func (o *RatePlanType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *RatePlanType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *RatePlanType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *RatePlanType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetRateCommission

`func (o *RatePlanType) GetRateCommission() RatePlanCommissionType`

GetRateCommission returns the RateCommission field if non-nil, zero value otherwise.

### GetRateCommissionOk

`func (o *RatePlanType) GetRateCommissionOk() (*RatePlanCommissionType, bool)`

GetRateCommissionOk returns a tuple with the RateCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCommission

`func (o *RatePlanType) SetRateCommission(v RatePlanCommissionType)`

SetRateCommission sets RateCommission field to given value.

### HasRateCommission

`func (o *RatePlanType) HasRateCommission() bool`

HasRateCommission returns a boolean if a field has been set.

### GetRateDeposit

`func (o *RatePlanType) GetRateDeposit() RatePlanDepositType`

GetRateDeposit returns the RateDeposit field if non-nil, zero value otherwise.

### GetRateDepositOk

`func (o *RatePlanType) GetRateDepositOk() (*RatePlanDepositType, bool)`

GetRateDepositOk returns a tuple with the RateDeposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateDeposit

`func (o *RatePlanType) SetRateDeposit(v RatePlanDepositType)`

SetRateDeposit sets RateDeposit field to given value.

### HasRateDeposit

`func (o *RatePlanType) HasRateDeposit() bool`

HasRateDeposit returns a boolean if a field has been set.

### GetRatePackages

`func (o *RatePlanType) GetRatePackages() RatePackagesType`

GetRatePackages returns the RatePackages field if non-nil, zero value otherwise.

### GetRatePackagesOk

`func (o *RatePlanType) GetRatePackagesOk() (*RatePackagesType, bool)`

GetRatePackagesOk returns a tuple with the RatePackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePackages

`func (o *RatePlanType) SetRatePackages(v RatePackagesType)`

SetRatePackages sets RatePackages field to given value.

### HasRatePackages

`func (o *RatePlanType) HasRatePackages() bool`

HasRatePackages returns a boolean if a field has been set.

### GetRatePlanBasedOnRates

`func (o *RatePlanType) GetRatePlanBasedOnRates() RatePlanBasedOnRatesType`

GetRatePlanBasedOnRates returns the RatePlanBasedOnRates field if non-nil, zero value otherwise.

### GetRatePlanBasedOnRatesOk

`func (o *RatePlanType) GetRatePlanBasedOnRatesOk() (*RatePlanBasedOnRatesType, bool)`

GetRatePlanBasedOnRatesOk returns a tuple with the RatePlanBasedOnRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanBasedOnRates

`func (o *RatePlanType) SetRatePlanBasedOnRates(v RatePlanBasedOnRatesType)`

SetRatePlanBasedOnRates sets RatePlanBasedOnRates field to given value.

### HasRatePlanBasedOnRates

`func (o *RatePlanType) HasRatePlanBasedOnRates() bool`

HasRatePlanBasedOnRates returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *RatePlanType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *RatePlanType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *RatePlanType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *RatePlanType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRatePlanCodeIndicators

`func (o *RatePlanType) GetRatePlanCodeIndicators() IndicatorsType`

GetRatePlanCodeIndicators returns the RatePlanCodeIndicators field if non-nil, zero value otherwise.

### GetRatePlanCodeIndicatorsOk

`func (o *RatePlanType) GetRatePlanCodeIndicatorsOk() (*IndicatorsType, bool)`

GetRatePlanCodeIndicatorsOk returns a tuple with the RatePlanCodeIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCodeIndicators

`func (o *RatePlanType) SetRatePlanCodeIndicators(v IndicatorsType)`

SetRatePlanCodeIndicators sets RatePlanCodeIndicators field to given value.

### HasRatePlanCodeIndicators

`func (o *RatePlanType) HasRatePlanCodeIndicators() bool`

HasRatePlanCodeIndicators returns a boolean if a field has been set.

### GetRatePlanScheduleInfo

`func (o *RatePlanType) GetRatePlanScheduleInfo() RatePlanScheduleInfoType`

GetRatePlanScheduleInfo returns the RatePlanScheduleInfo field if non-nil, zero value otherwise.

### GetRatePlanScheduleInfoOk

`func (o *RatePlanType) GetRatePlanScheduleInfoOk() (*RatePlanScheduleInfoType, bool)`

GetRatePlanScheduleInfoOk returns a tuple with the RatePlanScheduleInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanScheduleInfo

`func (o *RatePlanType) SetRatePlanScheduleInfo(v RatePlanScheduleInfoType)`

SetRatePlanScheduleInfo sets RatePlanScheduleInfo field to given value.

### HasRatePlanScheduleInfo

`func (o *RatePlanType) HasRatePlanScheduleInfo() bool`

HasRatePlanScheduleInfo returns a boolean if a field has been set.

### GetRedemption

`func (o *RatePlanType) GetRedemption() bool`

GetRedemption returns the Redemption field if non-nil, zero value otherwise.

### GetRedemptionOk

`func (o *RatePlanType) GetRedemptionOk() (*bool, bool)`

GetRedemptionOk returns a tuple with the Redemption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedemption

`func (o *RatePlanType) SetRedemption(v bool)`

SetRedemption sets Redemption field to given value.

### HasRedemption

`func (o *RatePlanType) HasRedemption() bool`

HasRedemption returns a boolean if a field has been set.

### GetRoomTypeList

`func (o *RatePlanType) GetRoomTypeList() RateRoomTypeListType`

GetRoomTypeList returns the RoomTypeList field if non-nil, zero value otherwise.

### GetRoomTypeListOk

`func (o *RatePlanType) GetRoomTypeListOk() (*RateRoomTypeListType, bool)`

GetRoomTypeListOk returns a tuple with the RoomTypeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeList

`func (o *RatePlanType) SetRoomTypeList(v RateRoomTypeListType)`

SetRoomTypeList sets RoomTypeList field to given value.

### HasRoomTypeList

`func (o *RatePlanType) HasRoomTypeList() bool`

HasRoomTypeList returns a boolean if a field has been set.

### GetRoutingInstructions

`func (o *RatePlanType) GetRoutingInstructions() RatePlanRoutingInstructionsType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *RatePlanType) GetRoutingInstructionsOk() (*RatePlanRoutingInstructionsType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *RatePlanType) SetRoutingInstructions(v RatePlanRoutingInstructionsType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *RatePlanType) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.

### GetSupressRate

`func (o *RatePlanType) GetSupressRate() bool`

GetSupressRate returns the SupressRate field if non-nil, zero value otherwise.

### GetSupressRateOk

`func (o *RatePlanType) GetSupressRateOk() (*bool, bool)`

GetSupressRateOk returns a tuple with the SupressRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupressRate

`func (o *RatePlanType) SetSupressRate(v bool)`

SetSupressRate sets SupressRate field to given value.

### HasSupressRate

`func (o *RatePlanType) HasSupressRate() bool`

HasSupressRate returns a boolean if a field has been set.

### GetTiered

`func (o *RatePlanType) GetTiered() bool`

GetTiered returns the Tiered field if non-nil, zero value otherwise.

### GetTieredOk

`func (o *RatePlanType) GetTieredOk() (*bool, bool)`

GetTieredOk returns a tuple with the Tiered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTiered

`func (o *RatePlanType) SetTiered(v bool)`

SetTiered sets Tiered field to given value.

### HasTiered

`func (o *RatePlanType) HasTiered() bool`

HasTiered returns a boolean if a field has been set.

### GetTransactionDetails

`func (o *RatePlanType) GetTransactionDetails() RatePlanTransactionDetailsType`

GetTransactionDetails returns the TransactionDetails field if non-nil, zero value otherwise.

### GetTransactionDetailsOk

`func (o *RatePlanType) GetTransactionDetailsOk() (*RatePlanTransactionDetailsType, bool)`

GetTransactionDetailsOk returns a tuple with the TransactionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDetails

`func (o *RatePlanType) SetTransactionDetails(v RatePlanTransactionDetailsType)`

SetTransactionDetails sets TransactionDetails field to given value.

### HasTransactionDetails

`func (o *RatePlanType) HasTransactionDetails() bool`

HasTransactionDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


