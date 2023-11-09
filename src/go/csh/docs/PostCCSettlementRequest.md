# PostCCSettlementRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditCardSettlement** | Pointer to [**CCBatchSettlementType**](CCBatchSettlementType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostCCSettlementRequest

`func NewPostCCSettlementRequest() *PostCCSettlementRequest`

NewPostCCSettlementRequest instantiates a new PostCCSettlementRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCCSettlementRequestWithDefaults

`func NewPostCCSettlementRequestWithDefaults() *PostCCSettlementRequest`

NewPostCCSettlementRequestWithDefaults instantiates a new PostCCSettlementRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditCardSettlement

`func (o *PostCCSettlementRequest) GetCreditCardSettlement() CCBatchSettlementType`

GetCreditCardSettlement returns the CreditCardSettlement field if non-nil, zero value otherwise.

### GetCreditCardSettlementOk

`func (o *PostCCSettlementRequest) GetCreditCardSettlementOk() (*CCBatchSettlementType, bool)`

GetCreditCardSettlementOk returns a tuple with the CreditCardSettlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardSettlement

`func (o *PostCCSettlementRequest) SetCreditCardSettlement(v CCBatchSettlementType)`

SetCreditCardSettlement sets CreditCardSettlement field to given value.

### HasCreditCardSettlement

`func (o *PostCCSettlementRequest) HasCreditCardSettlement() bool`

HasCreditCardSettlement returns a boolean if a field has been set.

### GetHotelId

`func (o *PostCCSettlementRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostCCSettlementRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostCCSettlementRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostCCSettlementRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PostCCSettlementRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCCSettlementRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCCSettlementRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCCSettlementRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCCSettlementRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCCSettlementRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCCSettlementRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCCSettlementRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


