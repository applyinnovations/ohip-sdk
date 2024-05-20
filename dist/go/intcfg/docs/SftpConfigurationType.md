# SftpConfigurationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigurationId** | Pointer to **int32** | Unique id associated with this configuration | [optional] 
**Destination** | Pointer to **string** | SFTP destination | [optional] 
**Description** | Pointer to **string** | Description of the destination, such as Shift Reports. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the configuration is inactive or not. | [optional] 
**HotelId** | Pointer to **string** | Hotel code | [optional] 

## Methods

### NewSftpConfigurationType

`func NewSftpConfigurationType() *SftpConfigurationType`

NewSftpConfigurationType instantiates a new SftpConfigurationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSftpConfigurationTypeWithDefaults

`func NewSftpConfigurationTypeWithDefaults() *SftpConfigurationType`

NewSftpConfigurationTypeWithDefaults instantiates a new SftpConfigurationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfigurationId

`func (o *SftpConfigurationType) GetConfigurationId() int32`

GetConfigurationId returns the ConfigurationId field if non-nil, zero value otherwise.

### GetConfigurationIdOk

`func (o *SftpConfigurationType) GetConfigurationIdOk() (*int32, bool)`

GetConfigurationIdOk returns a tuple with the ConfigurationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigurationId

`func (o *SftpConfigurationType) SetConfigurationId(v int32)`

SetConfigurationId sets ConfigurationId field to given value.

### HasConfigurationId

`func (o *SftpConfigurationType) HasConfigurationId() bool`

HasConfigurationId returns a boolean if a field has been set.

### GetDestination

`func (o *SftpConfigurationType) GetDestination() string`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *SftpConfigurationType) GetDestinationOk() (*string, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *SftpConfigurationType) SetDestination(v string)`

SetDestination sets Destination field to given value.

### HasDestination

`func (o *SftpConfigurationType) HasDestination() bool`

HasDestination returns a boolean if a field has been set.

### GetDescription

`func (o *SftpConfigurationType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SftpConfigurationType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SftpConfigurationType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SftpConfigurationType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInactive

`func (o *SftpConfigurationType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *SftpConfigurationType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *SftpConfigurationType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *SftpConfigurationType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetHotelId

`func (o *SftpConfigurationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SftpConfigurationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SftpConfigurationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SftpConfigurationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


