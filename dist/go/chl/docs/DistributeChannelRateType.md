# DistributeChannelRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelCode** | Pointer to **string** | Channel. | [optional] 
**ChannelRatePlanCode** | Pointer to **string** | Channel Rate Code. | [optional] 
**DistributeChannelRateMappings** | Pointer to [**[]DistributeChannelRateMappingType**](DistributeChannelRateMappingType.md) | Information about rate codes to be distributed to a channel. | [optional] 
**NegotiatedProfiles** | Pointer to [**[]ChannelNegProfileType**](ChannelNegProfileType.md) | Negotiated channel rate details to be modified. | [optional] 

## Methods

### NewDistributeChannelRateType

`func NewDistributeChannelRateType() *DistributeChannelRateType`

NewDistributeChannelRateType instantiates a new DistributeChannelRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDistributeChannelRateTypeWithDefaults

`func NewDistributeChannelRateTypeWithDefaults() *DistributeChannelRateType`

NewDistributeChannelRateTypeWithDefaults instantiates a new DistributeChannelRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelCode

`func (o *DistributeChannelRateType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *DistributeChannelRateType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *DistributeChannelRateType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *DistributeChannelRateType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetChannelRatePlanCode

`func (o *DistributeChannelRateType) GetChannelRatePlanCode() string`

GetChannelRatePlanCode returns the ChannelRatePlanCode field if non-nil, zero value otherwise.

### GetChannelRatePlanCodeOk

`func (o *DistributeChannelRateType) GetChannelRatePlanCodeOk() (*string, bool)`

GetChannelRatePlanCodeOk returns a tuple with the ChannelRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanCode

`func (o *DistributeChannelRateType) SetChannelRatePlanCode(v string)`

SetChannelRatePlanCode sets ChannelRatePlanCode field to given value.

### HasChannelRatePlanCode

`func (o *DistributeChannelRateType) HasChannelRatePlanCode() bool`

HasChannelRatePlanCode returns a boolean if a field has been set.

### GetDistributeChannelRateMappings

`func (o *DistributeChannelRateType) GetDistributeChannelRateMappings() []DistributeChannelRateMappingType`

GetDistributeChannelRateMappings returns the DistributeChannelRateMappings field if non-nil, zero value otherwise.

### GetDistributeChannelRateMappingsOk

`func (o *DistributeChannelRateType) GetDistributeChannelRateMappingsOk() (*[]DistributeChannelRateMappingType, bool)`

GetDistributeChannelRateMappingsOk returns a tuple with the DistributeChannelRateMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistributeChannelRateMappings

`func (o *DistributeChannelRateType) SetDistributeChannelRateMappings(v []DistributeChannelRateMappingType)`

SetDistributeChannelRateMappings sets DistributeChannelRateMappings field to given value.

### HasDistributeChannelRateMappings

`func (o *DistributeChannelRateType) HasDistributeChannelRateMappings() bool`

HasDistributeChannelRateMappings returns a boolean if a field has been set.

### GetNegotiatedProfiles

`func (o *DistributeChannelRateType) GetNegotiatedProfiles() []ChannelNegProfileType`

GetNegotiatedProfiles returns the NegotiatedProfiles field if non-nil, zero value otherwise.

### GetNegotiatedProfilesOk

`func (o *DistributeChannelRateType) GetNegotiatedProfilesOk() (*[]ChannelNegProfileType, bool)`

GetNegotiatedProfilesOk returns a tuple with the NegotiatedProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedProfiles

`func (o *DistributeChannelRateType) SetNegotiatedProfiles(v []ChannelNegProfileType)`

SetNegotiatedProfiles sets NegotiatedProfiles field to given value.

### HasNegotiatedProfiles

`func (o *DistributeChannelRateType) HasNegotiatedProfiles() bool`

HasNegotiatedProfiles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


