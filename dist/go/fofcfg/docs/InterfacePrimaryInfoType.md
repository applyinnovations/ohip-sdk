# InterfacePrimaryInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code | [optional] 
**InterfaceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**InterfaceName** | Pointer to **string** | Name of the Hotel Interface | [optional] 
**InterfaceProductCode** | Pointer to **string** | FKT Logo required for the external interface. | [optional] 
**InterfaceType** | Pointer to [**HotelInterfaceTypeType**](HotelInterfaceTypeType.md) |  | [optional] 
**LicenseCode** | Pointer to **string** | Interface License code | [optional] 
**Logo** | Pointer to **string** | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. | [optional] 
**MachineId** | Pointer to **int32** | The ID stored in IFC_MACHINES table. | [optional] 
**MachineName** | Pointer to **string** | Unique machine name of the running IFC. | [optional] 
**ProductCode** | Pointer to **string** | Three letter code that uniquely identifies the external interface. | [optional] 

## Methods

### NewInterfacePrimaryInfoType

`func NewInterfacePrimaryInfoType() *InterfacePrimaryInfoType`

NewInterfacePrimaryInfoType instantiates a new InterfacePrimaryInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfacePrimaryInfoTypeWithDefaults

`func NewInterfacePrimaryInfoTypeWithDefaults() *InterfacePrimaryInfoType`

NewInterfacePrimaryInfoTypeWithDefaults instantiates a new InterfacePrimaryInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *InterfacePrimaryInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InterfacePrimaryInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InterfacePrimaryInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InterfacePrimaryInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInterfaceId

`func (o *InterfacePrimaryInfoType) GetInterfaceId() UniqueIDType`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *InterfacePrimaryInfoType) GetInterfaceIdOk() (*UniqueIDType, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *InterfacePrimaryInfoType) SetInterfaceId(v UniqueIDType)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *InterfacePrimaryInfoType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetInterfaceName

`func (o *InterfacePrimaryInfoType) GetInterfaceName() string`

GetInterfaceName returns the InterfaceName field if non-nil, zero value otherwise.

### GetInterfaceNameOk

`func (o *InterfacePrimaryInfoType) GetInterfaceNameOk() (*string, bool)`

GetInterfaceNameOk returns a tuple with the InterfaceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceName

`func (o *InterfacePrimaryInfoType) SetInterfaceName(v string)`

SetInterfaceName sets InterfaceName field to given value.

### HasInterfaceName

`func (o *InterfacePrimaryInfoType) HasInterfaceName() bool`

HasInterfaceName returns a boolean if a field has been set.

### GetInterfaceProductCode

`func (o *InterfacePrimaryInfoType) GetInterfaceProductCode() string`

GetInterfaceProductCode returns the InterfaceProductCode field if non-nil, zero value otherwise.

### GetInterfaceProductCodeOk

`func (o *InterfacePrimaryInfoType) GetInterfaceProductCodeOk() (*string, bool)`

GetInterfaceProductCodeOk returns a tuple with the InterfaceProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceProductCode

`func (o *InterfacePrimaryInfoType) SetInterfaceProductCode(v string)`

SetInterfaceProductCode sets InterfaceProductCode field to given value.

### HasInterfaceProductCode

`func (o *InterfacePrimaryInfoType) HasInterfaceProductCode() bool`

HasInterfaceProductCode returns a boolean if a field has been set.

### GetInterfaceType

`func (o *InterfacePrimaryInfoType) GetInterfaceType() HotelInterfaceTypeType`

GetInterfaceType returns the InterfaceType field if non-nil, zero value otherwise.

### GetInterfaceTypeOk

`func (o *InterfacePrimaryInfoType) GetInterfaceTypeOk() (*HotelInterfaceTypeType, bool)`

GetInterfaceTypeOk returns a tuple with the InterfaceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceType

`func (o *InterfacePrimaryInfoType) SetInterfaceType(v HotelInterfaceTypeType)`

SetInterfaceType sets InterfaceType field to given value.

### HasInterfaceType

`func (o *InterfacePrimaryInfoType) HasInterfaceType() bool`

HasInterfaceType returns a boolean if a field has been set.

### GetLicenseCode

`func (o *InterfacePrimaryInfoType) GetLicenseCode() string`

GetLicenseCode returns the LicenseCode field if non-nil, zero value otherwise.

### GetLicenseCodeOk

`func (o *InterfacePrimaryInfoType) GetLicenseCodeOk() (*string, bool)`

GetLicenseCodeOk returns a tuple with the LicenseCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicenseCode

`func (o *InterfacePrimaryInfoType) SetLicenseCode(v string)`

SetLicenseCode sets LicenseCode field to given value.

### HasLicenseCode

`func (o *InterfacePrimaryInfoType) HasLicenseCode() bool`

HasLicenseCode returns a boolean if a field has been set.

### GetLogo

`func (o *InterfacePrimaryInfoType) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *InterfacePrimaryInfoType) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *InterfacePrimaryInfoType) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *InterfacePrimaryInfoType) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetMachineId

`func (o *InterfacePrimaryInfoType) GetMachineId() int32`

GetMachineId returns the MachineId field if non-nil, zero value otherwise.

### GetMachineIdOk

`func (o *InterfacePrimaryInfoType) GetMachineIdOk() (*int32, bool)`

GetMachineIdOk returns a tuple with the MachineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineId

`func (o *InterfacePrimaryInfoType) SetMachineId(v int32)`

SetMachineId sets MachineId field to given value.

### HasMachineId

`func (o *InterfacePrimaryInfoType) HasMachineId() bool`

HasMachineId returns a boolean if a field has been set.

### GetMachineName

`func (o *InterfacePrimaryInfoType) GetMachineName() string`

GetMachineName returns the MachineName field if non-nil, zero value otherwise.

### GetMachineNameOk

`func (o *InterfacePrimaryInfoType) GetMachineNameOk() (*string, bool)`

GetMachineNameOk returns a tuple with the MachineName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineName

`func (o *InterfacePrimaryInfoType) SetMachineName(v string)`

SetMachineName sets MachineName field to given value.

### HasMachineName

`func (o *InterfacePrimaryInfoType) HasMachineName() bool`

HasMachineName returns a boolean if a field has been set.

### GetProductCode

`func (o *InterfacePrimaryInfoType) GetProductCode() string`

GetProductCode returns the ProductCode field if non-nil, zero value otherwise.

### GetProductCodeOk

`func (o *InterfacePrimaryInfoType) GetProductCodeOk() (*string, bool)`

GetProductCodeOk returns a tuple with the ProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductCode

`func (o *InterfacePrimaryInfoType) SetProductCode(v string)`

SetProductCode sets ProductCode field to given value.

### HasProductCode

`func (o *InterfacePrimaryInfoType) HasProductCode() bool`

HasProductCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


