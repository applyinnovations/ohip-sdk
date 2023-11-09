# PostCompTransactionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TrxNo** | Pointer to **float32** | Transaction Number for which request is being submitted. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostCompTransactionRequest

`func NewPostCompTransactionRequest() *PostCompTransactionRequest`

NewPostCompTransactionRequest instantiates a new PostCompTransactionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCompTransactionRequestWithDefaults

`func NewPostCompTransactionRequestWithDefaults() *PostCompTransactionRequest`

NewPostCompTransactionRequestWithDefaults instantiates a new PostCompTransactionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PostCompTransactionRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostCompTransactionRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostCompTransactionRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostCompTransactionRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PostCompTransactionRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCompTransactionRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCompTransactionRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCompTransactionRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrxNo

`func (o *PostCompTransactionRequest) GetTrxNo() float32`

GetTrxNo returns the TrxNo field if non-nil, zero value otherwise.

### GetTrxNoOk

`func (o *PostCompTransactionRequest) GetTrxNoOk() (*float32, bool)`

GetTrxNoOk returns a tuple with the TrxNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxNo

`func (o *PostCompTransactionRequest) SetTrxNo(v float32)`

SetTrxNo sets TrxNo field to given value.

### HasTrxNo

`func (o *PostCompTransactionRequest) HasTrxNo() bool`

HasTrxNo returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCompTransactionRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCompTransactionRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCompTransactionRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCompTransactionRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


