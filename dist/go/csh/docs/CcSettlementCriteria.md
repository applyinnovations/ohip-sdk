# CcSettlementCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**CreditCardSettlement** | Pointer to [**CCBatchSettlementType**](CCBatchSettlementType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCcSettlementCriteria

`func NewCcSettlementCriteria() *CcSettlementCriteria`

NewCcSettlementCriteria instantiates a new CcSettlementCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCcSettlementCriteriaWithDefaults

`func NewCcSettlementCriteriaWithDefaults() *CcSettlementCriteria`

NewCcSettlementCriteriaWithDefaults instantiates a new CcSettlementCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CcSettlementCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CcSettlementCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CcSettlementCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CcSettlementCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCreditCardSettlement

`func (o *CcSettlementCriteria) GetCreditCardSettlement() CCBatchSettlementType`

GetCreditCardSettlement returns the CreditCardSettlement field if non-nil, zero value otherwise.

### GetCreditCardSettlementOk

`func (o *CcSettlementCriteria) GetCreditCardSettlementOk() (*CCBatchSettlementType, bool)`

GetCreditCardSettlementOk returns a tuple with the CreditCardSettlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardSettlement

`func (o *CcSettlementCriteria) SetCreditCardSettlement(v CCBatchSettlementType)`

SetCreditCardSettlement sets CreditCardSettlement field to given value.

### HasCreditCardSettlement

`func (o *CcSettlementCriteria) HasCreditCardSettlement() bool`

HasCreditCardSettlement returns a boolean if a field has been set.

### GetLinks

`func (o *CcSettlementCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CcSettlementCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CcSettlementCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CcSettlementCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CcSettlementCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CcSettlementCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CcSettlementCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CcSettlementCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


