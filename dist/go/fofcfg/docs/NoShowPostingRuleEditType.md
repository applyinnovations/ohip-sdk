# NoShowPostingRuleEditType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationType** | Pointer to **string** | Type of the reservation. | [optional] 
**SourceCode** | Pointer to **string** | Source code of the reservation. | [optional] 
**PostingRule** | Pointer to [**PostingRuleType**](PostingRuleType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Indicates for which hotel this posting rule apply to. | [optional] 
**NewRule** | Pointer to [**NoShowPostingRuleType**](NoShowPostingRuleType.md) |  | [optional] 

## Methods

### NewNoShowPostingRuleEditType

`func NewNoShowPostingRuleEditType() *NoShowPostingRuleEditType`

NewNoShowPostingRuleEditType instantiates a new NoShowPostingRuleEditType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNoShowPostingRuleEditTypeWithDefaults

`func NewNoShowPostingRuleEditTypeWithDefaults() *NoShowPostingRuleEditType`

NewNoShowPostingRuleEditTypeWithDefaults instantiates a new NoShowPostingRuleEditType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationType

`func (o *NoShowPostingRuleEditType) GetReservationType() string`

GetReservationType returns the ReservationType field if non-nil, zero value otherwise.

### GetReservationTypeOk

`func (o *NoShowPostingRuleEditType) GetReservationTypeOk() (*string, bool)`

GetReservationTypeOk returns a tuple with the ReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationType

`func (o *NoShowPostingRuleEditType) SetReservationType(v string)`

SetReservationType sets ReservationType field to given value.

### HasReservationType

`func (o *NoShowPostingRuleEditType) HasReservationType() bool`

HasReservationType returns a boolean if a field has been set.

### GetSourceCode

`func (o *NoShowPostingRuleEditType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *NoShowPostingRuleEditType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *NoShowPostingRuleEditType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *NoShowPostingRuleEditType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetPostingRule

`func (o *NoShowPostingRuleEditType) GetPostingRule() PostingRuleType`

GetPostingRule returns the PostingRule field if non-nil, zero value otherwise.

### GetPostingRuleOk

`func (o *NoShowPostingRuleEditType) GetPostingRuleOk() (*PostingRuleType, bool)`

GetPostingRuleOk returns a tuple with the PostingRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRule

`func (o *NoShowPostingRuleEditType) SetPostingRule(v PostingRuleType)`

SetPostingRule sets PostingRule field to given value.

### HasPostingRule

`func (o *NoShowPostingRuleEditType) HasPostingRule() bool`

HasPostingRule returns a boolean if a field has been set.

### GetHotelId

`func (o *NoShowPostingRuleEditType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *NoShowPostingRuleEditType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *NoShowPostingRuleEditType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *NoShowPostingRuleEditType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNewRule

`func (o *NoShowPostingRuleEditType) GetNewRule() NoShowPostingRuleType`

GetNewRule returns the NewRule field if non-nil, zero value otherwise.

### GetNewRuleOk

`func (o *NoShowPostingRuleEditType) GetNewRuleOk() (*NoShowPostingRuleType, bool)`

GetNewRuleOk returns a tuple with the NewRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRule

`func (o *NoShowPostingRuleEditType) SetNewRule(v NoShowPostingRuleType)`

SetNewRule sets NewRule field to given value.

### HasNewRule

`func (o *NoShowPostingRuleEditType) HasNewRule() bool`

HasNewRule returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


