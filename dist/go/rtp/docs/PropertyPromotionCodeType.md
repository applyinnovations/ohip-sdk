# PropertyPromotionCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PromotionCodeDetails** | Pointer to [**PromotionCodeDetailsType**](PromotionCodeDetailsType.md) |  | [optional] 
**PromotionCode** | Pointer to **string** | An alphanumeric code for the promotion. This code may not be changed once the promotion code is saved. | [optional] 
**PropertyPromotionRateCodes** | Pointer to [**[]PropertyPromotionRateCodeType**](PropertyPromotionRateCodeType.md) | List of Promotion Rate Code | [optional] 
**PromoCodeRoutingInstruction** | Pointer to [**PromoCodeRoutingInstructionType**](PromoCodeRoutingInstructionType.md) |  | [optional] 
**PromoCodeRoutingInstructions** | Pointer to [**[]PromoCodeRoutingInstructionType**](PromoCodeRoutingInstructionType.md) | Routing fetchInstructions item which is uniquely identified by its Time Span | [optional] 
**HotelId** | Pointer to **string** | Hotel code the property promotion code belongs to. | [optional] 

## Methods

### NewPropertyPromotionCodeType

`func NewPropertyPromotionCodeType() *PropertyPromotionCodeType`

NewPropertyPromotionCodeType instantiates a new PropertyPromotionCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyPromotionCodeTypeWithDefaults

`func NewPropertyPromotionCodeTypeWithDefaults() *PropertyPromotionCodeType`

NewPropertyPromotionCodeTypeWithDefaults instantiates a new PropertyPromotionCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPromotionCodeDetails

`func (o *PropertyPromotionCodeType) GetPromotionCodeDetails() PromotionCodeDetailsType`

GetPromotionCodeDetails returns the PromotionCodeDetails field if non-nil, zero value otherwise.

### GetPromotionCodeDetailsOk

`func (o *PropertyPromotionCodeType) GetPromotionCodeDetailsOk() (*PromotionCodeDetailsType, bool)`

GetPromotionCodeDetailsOk returns a tuple with the PromotionCodeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCodeDetails

`func (o *PropertyPromotionCodeType) SetPromotionCodeDetails(v PromotionCodeDetailsType)`

SetPromotionCodeDetails sets PromotionCodeDetails field to given value.

### HasPromotionCodeDetails

`func (o *PropertyPromotionCodeType) HasPromotionCodeDetails() bool`

HasPromotionCodeDetails returns a boolean if a field has been set.

### GetPromotionCode

`func (o *PropertyPromotionCodeType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *PropertyPromotionCodeType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *PropertyPromotionCodeType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *PropertyPromotionCodeType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetPropertyPromotionRateCodes

`func (o *PropertyPromotionCodeType) GetPropertyPromotionRateCodes() []PropertyPromotionRateCodeType`

GetPropertyPromotionRateCodes returns the PropertyPromotionRateCodes field if non-nil, zero value otherwise.

### GetPropertyPromotionRateCodesOk

`func (o *PropertyPromotionCodeType) GetPropertyPromotionRateCodesOk() (*[]PropertyPromotionRateCodeType, bool)`

GetPropertyPromotionRateCodesOk returns a tuple with the PropertyPromotionRateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyPromotionRateCodes

`func (o *PropertyPromotionCodeType) SetPropertyPromotionRateCodes(v []PropertyPromotionRateCodeType)`

SetPropertyPromotionRateCodes sets PropertyPromotionRateCodes field to given value.

### HasPropertyPromotionRateCodes

`func (o *PropertyPromotionCodeType) HasPropertyPromotionRateCodes() bool`

HasPropertyPromotionRateCodes returns a boolean if a field has been set.

### GetPromoCodeRoutingInstruction

`func (o *PropertyPromotionCodeType) GetPromoCodeRoutingInstruction() PromoCodeRoutingInstructionType`

GetPromoCodeRoutingInstruction returns the PromoCodeRoutingInstruction field if non-nil, zero value otherwise.

### GetPromoCodeRoutingInstructionOk

`func (o *PropertyPromotionCodeType) GetPromoCodeRoutingInstructionOk() (*PromoCodeRoutingInstructionType, bool)`

GetPromoCodeRoutingInstructionOk returns a tuple with the PromoCodeRoutingInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromoCodeRoutingInstruction

`func (o *PropertyPromotionCodeType) SetPromoCodeRoutingInstruction(v PromoCodeRoutingInstructionType)`

SetPromoCodeRoutingInstruction sets PromoCodeRoutingInstruction field to given value.

### HasPromoCodeRoutingInstruction

`func (o *PropertyPromotionCodeType) HasPromoCodeRoutingInstruction() bool`

HasPromoCodeRoutingInstruction returns a boolean if a field has been set.

### GetPromoCodeRoutingInstructions

`func (o *PropertyPromotionCodeType) GetPromoCodeRoutingInstructions() []PromoCodeRoutingInstructionType`

GetPromoCodeRoutingInstructions returns the PromoCodeRoutingInstructions field if non-nil, zero value otherwise.

### GetPromoCodeRoutingInstructionsOk

`func (o *PropertyPromotionCodeType) GetPromoCodeRoutingInstructionsOk() (*[]PromoCodeRoutingInstructionType, bool)`

GetPromoCodeRoutingInstructionsOk returns a tuple with the PromoCodeRoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromoCodeRoutingInstructions

`func (o *PropertyPromotionCodeType) SetPromoCodeRoutingInstructions(v []PromoCodeRoutingInstructionType)`

SetPromoCodeRoutingInstructions sets PromoCodeRoutingInstructions field to given value.

### HasPromoCodeRoutingInstructions

`func (o *PropertyPromotionCodeType) HasPromoCodeRoutingInstructions() bool`

HasPromoCodeRoutingInstructions returns a boolean if a field has been set.

### GetHotelId

`func (o *PropertyPromotionCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PropertyPromotionCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PropertyPromotionCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PropertyPromotionCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


