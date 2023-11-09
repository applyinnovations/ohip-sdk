# StagedProfileBillingInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Desc** | Pointer to **string** | Billing Instruction code description. | [optional] 
**RoutingInstructionsId** | Pointer to **float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | [optional] 
**BillingCode** | Pointer to **string** | Unique identifier for the Billing Instruction. | [optional] 
**HotelId** | Pointer to **string** | Hotel context of the Billing Instruction. | [optional] 
**ErrorDescription** | Pointer to **string** | The error in billing instruction information in a staged profile with an invalid status | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewStagedProfileBillingInstructionType

`func NewStagedProfileBillingInstructionType() *StagedProfileBillingInstructionType`

NewStagedProfileBillingInstructionType instantiates a new StagedProfileBillingInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileBillingInstructionTypeWithDefaults

`func NewStagedProfileBillingInstructionTypeWithDefaults() *StagedProfileBillingInstructionType`

NewStagedProfileBillingInstructionTypeWithDefaults instantiates a new StagedProfileBillingInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDesc

`func (o *StagedProfileBillingInstructionType) GetDesc() string`

GetDesc returns the Desc field if non-nil, zero value otherwise.

### GetDescOk

`func (o *StagedProfileBillingInstructionType) GetDescOk() (*string, bool)`

GetDescOk returns a tuple with the Desc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDesc

`func (o *StagedProfileBillingInstructionType) SetDesc(v string)`

SetDesc sets Desc field to given value.

### HasDesc

`func (o *StagedProfileBillingInstructionType) HasDesc() bool`

HasDesc returns a boolean if a field has been set.

### GetRoutingInstructionsId

`func (o *StagedProfileBillingInstructionType) GetRoutingInstructionsId() float32`

GetRoutingInstructionsId returns the RoutingInstructionsId field if non-nil, zero value otherwise.

### GetRoutingInstructionsIdOk

`func (o *StagedProfileBillingInstructionType) GetRoutingInstructionsIdOk() (*float32, bool)`

GetRoutingInstructionsIdOk returns a tuple with the RoutingInstructionsId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructionsId

`func (o *StagedProfileBillingInstructionType) SetRoutingInstructionsId(v float32)`

SetRoutingInstructionsId sets RoutingInstructionsId field to given value.

### HasRoutingInstructionsId

`func (o *StagedProfileBillingInstructionType) HasRoutingInstructionsId() bool`

HasRoutingInstructionsId returns a boolean if a field has been set.

### GetBillingCode

`func (o *StagedProfileBillingInstructionType) GetBillingCode() string`

GetBillingCode returns the BillingCode field if non-nil, zero value otherwise.

### GetBillingCodeOk

`func (o *StagedProfileBillingInstructionType) GetBillingCodeOk() (*string, bool)`

GetBillingCodeOk returns a tuple with the BillingCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingCode

`func (o *StagedProfileBillingInstructionType) SetBillingCode(v string)`

SetBillingCode sets BillingCode field to given value.

### HasBillingCode

`func (o *StagedProfileBillingInstructionType) HasBillingCode() bool`

HasBillingCode returns a boolean if a field has been set.

### GetHotelId

`func (o *StagedProfileBillingInstructionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *StagedProfileBillingInstructionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *StagedProfileBillingInstructionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *StagedProfileBillingInstructionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileBillingInstructionType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileBillingInstructionType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileBillingInstructionType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileBillingInstructionType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileBillingInstructionType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileBillingInstructionType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileBillingInstructionType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileBillingInstructionType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileBillingInstructionType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileBillingInstructionType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileBillingInstructionType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileBillingInstructionType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


