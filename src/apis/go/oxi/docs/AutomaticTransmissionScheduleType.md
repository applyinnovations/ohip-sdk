# AutomaticTransmissionScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MessageId** | Pointer to **string** | Unique alpha numeric value which determines exact transmission schedule. Pass null when creating new transmission schedule | [optional] 
**HotelId** | Pointer to **string** | Hotel code for which the automatic transmission schedule is set. | [optional] 
**Interface** | Pointer to **string** | Interface configured for the property for which the automatic transmission schedule is set. | [optional] 
**Module** | Pointer to [**AutomaticTransmissionScheduleModuleTypeType**](AutomaticTransmissionScheduleModuleTypeType.md) |  | [optional] 
**Frequency** | Pointer to [**AutomaticTransmissionScheduleFrequencyType**](AutomaticTransmissionScheduleFrequencyType.md) |  | [optional] 
**StartDate** | Pointer to **string** | Date from which transmission schedule has to run | [optional] 
**EndDate** | Pointer to **string** | End date of transmission schedule | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether automatic transmission is active or not | [optional] 
**Delta** | Pointer to **bool** | True to modify how the header and grid information sent in the RTAV message. | [optional] 
**LastSend** | Pointer to **time.Time** | Date when last automatic transmission occurred. | [optional] 

## Methods

### NewAutomaticTransmissionScheduleType

`func NewAutomaticTransmissionScheduleType() *AutomaticTransmissionScheduleType`

NewAutomaticTransmissionScheduleType instantiates a new AutomaticTransmissionScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutomaticTransmissionScheduleTypeWithDefaults

`func NewAutomaticTransmissionScheduleTypeWithDefaults() *AutomaticTransmissionScheduleType`

NewAutomaticTransmissionScheduleTypeWithDefaults instantiates a new AutomaticTransmissionScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessageId

`func (o *AutomaticTransmissionScheduleType) GetMessageId() string`

GetMessageId returns the MessageId field if non-nil, zero value otherwise.

### GetMessageIdOk

`func (o *AutomaticTransmissionScheduleType) GetMessageIdOk() (*string, bool)`

GetMessageIdOk returns a tuple with the MessageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageId

`func (o *AutomaticTransmissionScheduleType) SetMessageId(v string)`

SetMessageId sets MessageId field to given value.

### HasMessageId

`func (o *AutomaticTransmissionScheduleType) HasMessageId() bool`

HasMessageId returns a boolean if a field has been set.

### GetHotelId

`func (o *AutomaticTransmissionScheduleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AutomaticTransmissionScheduleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AutomaticTransmissionScheduleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AutomaticTransmissionScheduleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInterface

`func (o *AutomaticTransmissionScheduleType) GetInterface() string`

GetInterface returns the Interface field if non-nil, zero value otherwise.

### GetInterfaceOk

`func (o *AutomaticTransmissionScheduleType) GetInterfaceOk() (*string, bool)`

GetInterfaceOk returns a tuple with the Interface field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterface

`func (o *AutomaticTransmissionScheduleType) SetInterface(v string)`

SetInterface sets Interface field to given value.

### HasInterface

`func (o *AutomaticTransmissionScheduleType) HasInterface() bool`

HasInterface returns a boolean if a field has been set.

### GetModule

`func (o *AutomaticTransmissionScheduleType) GetModule() AutomaticTransmissionScheduleModuleTypeType`

GetModule returns the Module field if non-nil, zero value otherwise.

### GetModuleOk

`func (o *AutomaticTransmissionScheduleType) GetModuleOk() (*AutomaticTransmissionScheduleModuleTypeType, bool)`

GetModuleOk returns a tuple with the Module field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModule

`func (o *AutomaticTransmissionScheduleType) SetModule(v AutomaticTransmissionScheduleModuleTypeType)`

SetModule sets Module field to given value.

### HasModule

`func (o *AutomaticTransmissionScheduleType) HasModule() bool`

HasModule returns a boolean if a field has been set.

### GetFrequency

`func (o *AutomaticTransmissionScheduleType) GetFrequency() AutomaticTransmissionScheduleFrequencyType`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *AutomaticTransmissionScheduleType) GetFrequencyOk() (*AutomaticTransmissionScheduleFrequencyType, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *AutomaticTransmissionScheduleType) SetFrequency(v AutomaticTransmissionScheduleFrequencyType)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *AutomaticTransmissionScheduleType) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.

### GetStartDate

`func (o *AutomaticTransmissionScheduleType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *AutomaticTransmissionScheduleType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *AutomaticTransmissionScheduleType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *AutomaticTransmissionScheduleType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *AutomaticTransmissionScheduleType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *AutomaticTransmissionScheduleType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *AutomaticTransmissionScheduleType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *AutomaticTransmissionScheduleType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetInactive

`func (o *AutomaticTransmissionScheduleType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *AutomaticTransmissionScheduleType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *AutomaticTransmissionScheduleType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *AutomaticTransmissionScheduleType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetDelta

`func (o *AutomaticTransmissionScheduleType) GetDelta() bool`

GetDelta returns the Delta field if non-nil, zero value otherwise.

### GetDeltaOk

`func (o *AutomaticTransmissionScheduleType) GetDeltaOk() (*bool, bool)`

GetDeltaOk returns a tuple with the Delta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelta

`func (o *AutomaticTransmissionScheduleType) SetDelta(v bool)`

SetDelta sets Delta field to given value.

### HasDelta

`func (o *AutomaticTransmissionScheduleType) HasDelta() bool`

HasDelta returns a boolean if a field has been set.

### GetLastSend

`func (o *AutomaticTransmissionScheduleType) GetLastSend() time.Time`

GetLastSend returns the LastSend field if non-nil, zero value otherwise.

### GetLastSendOk

`func (o *AutomaticTransmissionScheduleType) GetLastSendOk() (*time.Time, bool)`

GetLastSendOk returns a tuple with the LastSend field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSend

`func (o *AutomaticTransmissionScheduleType) SetLastSend(v time.Time)`

SetLastSend sets LastSend field to given value.

### HasLastSend

`func (o *AutomaticTransmissionScheduleType) HasLastSend() bool`

HasLastSend returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


