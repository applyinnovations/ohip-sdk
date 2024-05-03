# CompTransactionCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TrxNo** | Pointer to **float32** | Transaction Number for which request is being submitted. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCompTransactionCriteria

`func NewCompTransactionCriteria() *CompTransactionCriteria`

NewCompTransactionCriteria instantiates a new CompTransactionCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompTransactionCriteriaWithDefaults

`func NewCompTransactionCriteriaWithDefaults() *CompTransactionCriteria`

NewCompTransactionCriteriaWithDefaults instantiates a new CompTransactionCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CompTransactionCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CompTransactionCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CompTransactionCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CompTransactionCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *CompTransactionCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CompTransactionCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CompTransactionCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CompTransactionCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrxNo

`func (o *CompTransactionCriteria) GetTrxNo() float32`

GetTrxNo returns the TrxNo field if non-nil, zero value otherwise.

### GetTrxNoOk

`func (o *CompTransactionCriteria) GetTrxNoOk() (*float32, bool)`

GetTrxNoOk returns a tuple with the TrxNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxNo

`func (o *CompTransactionCriteria) SetTrxNo(v float32)`

SetTrxNo sets TrxNo field to given value.

### HasTrxNo

`func (o *CompTransactionCriteria) HasTrxNo() bool`

HasTrxNo returns a boolean if a field has been set.

### GetWarnings

`func (o *CompTransactionCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CompTransactionCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CompTransactionCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CompTransactionCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


